package pl.szul.organizer.task.domain.endpoint;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.szul.organizer.task.domain.TaskFacade;
import pl.szul.organizer.task.domain.dto.TaskDto;

@RestController
@RequestMapping("api/task")
class TaskController {

    private TaskFacade taskFacade;

    TaskController(TaskFacade pTaskFacade) {
        taskFacade = pTaskFacade;
    }

    @PostMapping
    public void addTask(@RequestBody TaskDto pTaskDto){
        taskFacade.addTask(pTaskDto);
    }

}
