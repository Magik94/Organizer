package pl.szul.organizer.task.domain.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;

import java.time.LocalDate;
import java.util.Optional;

@Getter
public class TaskDto {

    private String id;
    private String title;
    private String status;
    private String description;
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate startDate;
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate endDate;
    private Optional<Long> workedTime = Optional.empty();
    private Optional<Long> planningTime = Optional.empty();

}
