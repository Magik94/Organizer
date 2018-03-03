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
    private LocalDate startDate;
    private LocalDate endDate;
    private String user;
    private Optional<Long> workedTime = Optional.empty();
    private Optional<Long> planningTime = Optional.empty();

    @Override
    public String toString() {
        return
                "id='" + id + '\'' +
                ",\n <b>title='" + title  +"</b>"+'\'' +
                ",\n status='" + status + '\'' +
                ",\n description='" + description + '\'' +
                ",\n startDate=" + startDate +
                ",\n endDate=" + endDate +
                ",\n workedTime=" + workedTime.orElse(0L) +
                ",\n planningTime=" + planningTime.orElse(0L);
    }
}
