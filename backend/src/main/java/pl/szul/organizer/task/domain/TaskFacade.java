package pl.szul.organizer.task.domain;

import pl.szul.organizer.task.domain.dto.TaskDto;

public interface TaskFacade {

    void addTask(TaskDto pTaskDto);
}
