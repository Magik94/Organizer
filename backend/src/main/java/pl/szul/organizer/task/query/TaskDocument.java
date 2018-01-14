package pl.szul.organizer.task.query;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;


@Getter
@Setter
@Document(collection = "task")
public class TaskDocument {

    @Id
    private String id;
    private String title;
    private String status;
    private String description;
    private LocalDate dateStart;
    private LocalDate dateEnd;
   // private Long workedTime;
    private String userId;
    private String dateStartString;



}
