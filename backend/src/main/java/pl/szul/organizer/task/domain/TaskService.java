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
                .dateStart(pTaskDto.getStartDate())
                .dateEnd(pTaskDto.getEndDate())
                .title(pTaskDto.getTitle())
                .workedTime(pTaskDto.getWorkedTime().orElse(0L))
                .dateStartString(pTaskDto.getStartDate().toString())
                .userId("TestUser") //todo jak bedzie logowanie brac prawdziwe user id
                .build());
    }
}