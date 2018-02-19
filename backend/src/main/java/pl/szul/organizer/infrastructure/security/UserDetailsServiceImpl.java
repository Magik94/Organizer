package pl.szul.organizer.infrastructure.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.szul.organizer.user.domain.UserDocument;
import pl.szul.organizer.user.domain.UserRepository;

import java.util.Optional;

import static java.util.Collections.emptyList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {


    @Autowired
    private UserRepository userRepository;

    public UserDetailsServiceImpl() {

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserDocument> userDocument = userRepository.findByUsername(username);
        if (userDocument.isPresent()) {
            return new User(username, userDocument.get().getPassword(), emptyList());

        }
        throw new UsernameNotFoundException(username);
    }
}