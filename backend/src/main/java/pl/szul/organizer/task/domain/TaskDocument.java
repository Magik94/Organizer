package pl.szul.organizer.task.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Optional;


@NoArgsConstructor
@Builder
@AllArgsConstructor
@Setter
@Getter
@Document(collection = "task")
class TaskDocument {

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
    private LocalDate createDate;



}
