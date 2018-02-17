package pl.szul.organizer.user.domain.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@Setter
public class UserDto {
    private String username;
    private String password;

}
