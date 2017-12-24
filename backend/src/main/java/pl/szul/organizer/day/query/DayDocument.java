package pl.szul.organizer.day.query;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "day")
@NoArgsConstructor
@Getter
public class DayDocument {
    @Id
    private String id;
    private LocalDate localDate;
    private Integer year;
    private Integer month;
    private Integer day;
    private Integer dayOfYear;
    private Integer dayOfWeek;
    private String nextDay;
    private String previousDay;
}
