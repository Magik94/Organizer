package pl.szul.organizer.event;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "events")
@Getter
@Setter
@Builder
public class EventStore {
    @Id
    private String id;
    private String status;
    private LocalDate date;
    private String username;
    private String body;


}
