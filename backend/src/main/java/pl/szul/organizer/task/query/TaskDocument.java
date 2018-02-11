package pl.szul.organizer.task.query;

import lombok.Getter;
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
    private LocalDate startDate;
    private LocalDate dateEnd;
    private Long workedTime;
    private Long planningTime;
    private String userId;
    private String dateStartString;



}
