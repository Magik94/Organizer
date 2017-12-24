package pl.szul.organizer.day.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "day")
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Setter
@Getter
class DayDocument {
    @Id
    private String id;
    @NonNull
    private LocalDate localDate;
    @NonNull
    private Integer year;
    @NonNull
    private Integer month;
    @NonNull
    private Integer day;
    @NonNull
    private Integer dayOfYear;
    @NonNull
    private Integer dayOfWeek;
    private String nextDay;
    private String previousDay;
}
