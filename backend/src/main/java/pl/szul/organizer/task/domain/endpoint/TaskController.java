package pl.szul.organizer.task.domain.endpoint;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
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

    @PostMapping()
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void addTask(@RequestBody TaskDto pTaskDto){
        taskFacade.addTask(pTaskDto);
    }

    @DeleteMapping()
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteTask(@RequestParam String id){
        taskFacade.delete(id);
    }

}
