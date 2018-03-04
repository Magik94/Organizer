package pl.szul.organizer.task.query;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.szul.organizer.infrastructure.security.UserService;

import java.util.Set;

@RestController
@RequestMapping("api/task")
class TaskQuery {
    private TaskQueryRepository taskQueryRepository;
    private UserService userService;

    TaskQuery(TaskQueryRepository pTaskQueryRepository, UserService pUserService) {
        taskQueryRepository = pTaskQueryRepository;
        userService = pUserService;
    }


    @GetMapping
    public ResponseEntity getUserTask() {
        return ResponseEntity.ok().body(taskQueryRepository.findByUserId(userService.getName()));
    }

    @GetMapping(path = "all")
    public ResponseEntity getAllTask() {
        return ResponseEntity.ok().body(taskQueryRepository.findAll());
    }
}
