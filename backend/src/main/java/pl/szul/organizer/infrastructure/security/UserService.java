package pl.szul.organizer.infrastructure.security;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@Scope(value = "session",proxyMode = ScopedProxyMode.TARGET_CLASS)
public class UserService {

    private Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    public String getName() {
        return authentication.getName();
    }

}
