package pl.szul.organizer.task.query;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/task")
class TaskQuery {

    private TaskQueryRepository taskQueryRepository;

    TaskQuery(TaskQueryRepository pTaskQueryRepository) {
        taskQueryRepository = pTaskQueryRepository;
    }


    @GetMapping
    public ResponseEntity getAllUserTasks(){
        return ResponseEntity.ok().body(taskQueryRepository.findByUserId("TestUser"));
    }
}
