package pl.szul.organizer.dashboard.query;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.szul.organizer.infrastructure.security.UserService;
import pl.szul.organizer.task.query.TaskQueryRepository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

@RestController
@RequestMapping("/api")
class DashboardEndpoint {

    private final TaskQueryRepository taskQueryRepository;
    private final UserService userService;

    DashboardEndpoint(TaskQueryRepository pTaskQueryRepository, UserService pUserService) {
        taskQueryRepository = pTaskQueryRepository;
        userService = pUserService;
    }

    @GetMapping("new-task/count")
    public ResponseEntity getNewTaskCount() throws ParseException {
        Date endDate = Date.from(LocalDate.now().plusDays(1).atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date startDate = Date.from(LocalDate.now().minusDays(1).atStartOfDay(ZoneId.systemDefault()).toInstant());
        Long newTask = taskQueryRepository.getNewTask(userService.getName(),startDate,endDate);
        return ResponseEntity.ok().body(new Res(newTask));
    }


    @Getter
    @Setter
    @AllArgsConstructor
    private class Res{
        Long count;
    }
}
