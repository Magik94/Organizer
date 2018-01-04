package pl.szul.organizer.task.domain;

import pl.szul.organizer.task.domain.dto.TaskDto;

class TaskService {
    private TaskRepository taskRepository;

    TaskService(TaskRepository pTaskRepository) {
        taskRepository = pTaskRepository;
    }

    void addTask(TaskDto pTaskDto) {
        taskRepository.save(TaskDocument.builder()
                .description(pTaskDto.getDescription())
                .status(pTaskDto.getStatus())
                .dateEnd(pTaskDto.getStartDate())
                .dateStart(pTaskDto.getEndDate())
                .title(pTaskDto.getTitle())
                .workedTime(pTaskDto.getWorkedTime().orElse(0L))
                .userId("TestUser") //todo jak bedzie logowanie brac prawdziwe user id
                .build());
    }
}