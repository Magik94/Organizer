package pl.szul.organizer.infrastructure.security;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.apache.commons.io.IOUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import pl.szul.organizer.user.domain.UserDocument;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import static pl.szul.organizer.infrastructure.security.SecurityConstants.EXPIRATION_TIME;
import static pl.szul.organizer.infrastructure.security.SecurityConstants.HEADER_STRING;
import static pl.szul.organizer.infrastructure.security.SecurityConstants.SECRET;
import static pl.szul.organizer.infrastructure.security.SecurityConstants.TOKEN_PREFIX;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {

        try {
            String requestBody = IOUtils.toString(req.getReader());
            UserDocument authRequest = objectMapper.readValue(requestBody, UserDocument.class);

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authRequest.getUsername(),
                            authRequest.getPassword(),
                            new ArrayList<>())
            );
        } catch (IOException pE) {
            pE.printStackTrace();
        }
        throw new IllegalStateException();
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException, ServletException {

        Date date = new Date(System.currentTimeMillis() + EXPIRATION_TIME);
        String token = Jwts.builder()
                .setSubject(((User) auth.getPrincipal()).getUsername())
                .setExpiration(date)
                .signWith(SignatureAlgorithm.HS512, SECRET.getBytes())
                .compact();
        res.setContentType("application/json;charset=UTF-8");
        res.getWriter().write("{" +
                "\"token\" :" + "\"" + TOKEN_PREFIX + token + "\"" +
                "}");
        res.getWriter().flush();
        res.getWriter().close();
        res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
    }
}