package pl.szul.organizer.user.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@Builder
@AllArgsConstructor

@Document(collection = "user")
@Getter
public class UserDocument {
    private String id;
    private String username;
    private String password;
}
