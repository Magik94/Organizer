package pl.szul.organizer.user.domain.endpoint;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.szul.organizer.user.domain.UserDocument;
import pl.szul.organizer.user.domain.UserRepository;
import pl.szul.organizer.user.domain.dto.UserDto;

import java.util.Optional;

@RestController
@RequestMapping("api/user")
class UserController {


    private final UserRepository userRepository;

    @Autowired
    UserController(UserRepository pUserRepository) {
        userRepository = pUserRepository;
    }

    @PostMapping
    ResponseEntity register(@RequestBody UserDto pUserDto) {
        Optional<UserDocument> user = userRepository.findByUsername(pUserDto.getUsername());
        return user.map(r -> getFailedRegister(pUserDto))
                .orElseGet(() -> getSuccessfulRegister(pUserDto));

    }

    private ResponseEntity<Response> getFailedRegister(@RequestBody UserDto pUserDto) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Response("Użytkownik " + pUserDto.getUsername() + " istnieje!"));
    }

    private ResponseEntity<Response> getSuccessfulRegister(UserDto pUserDto) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        userRepository.save(UserDocument.builder()
                .username(pUserDto.getUsername())
                .password(bCryptPasswordEncoder.encode(pUserDto.getPassword()))
                .build());
        return ResponseEntity.status(HttpStatus.CREATED).body(new Response("Użytkownik " + pUserDto.getUsername() + " zarjestrowany poprawnie!"));
    }

}
