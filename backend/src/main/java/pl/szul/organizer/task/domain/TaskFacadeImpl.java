package pl.szul.organizer.task.domain;

import pl.szul.organizer.task.domain.dto.TaskDto;

public class TaskFacadeImpl implements TaskFacade{

    private TaskService taskService;

    TaskFacadeImpl(TaskService pTaskService) {
        taskService = pTaskService;
    }

    @Override
    public void addTask(TaskDto pTaskDto) {
        taskService.addTask(pTaskDto);
    }

    @Override
    public void delete(String pTaskDto) {
        taskService.delete(pTaskDto);
    }
}
