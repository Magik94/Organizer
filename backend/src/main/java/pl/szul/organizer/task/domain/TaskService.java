package pl.szul.organizer.task.domain;

import pl.szul.organizer.task.domain.dto.TaskDto;

class TaskService {
    private TaskRepository taskRepository;

    TaskService(TaskRepository pTaskRepository) {
        taskRepository = pTaskRepository;
    }

    void addTask(TaskDto pTaskDto) {
        taskRepository.save(TaskDocument.builder()
                .id(pTaskDto.getId())
                .description(pTaskDto.getDescription())
                .status(pTaskDto.getStatus())
                .startDate(pTaskDto.getStartDate())
                .dateEnd(pTaskDto.getEndDate())
                .title(pTaskDto.getTitle())
                .workedTime(pTaskDto.getWorkedTime().orElse(0L))
                .planningTime(pTaskDto.getPlanningTime().orElse(0L))
                .dateStartString(pTaskDto.getStartDate().toString())
                .userId("TestUser") //todo jak bedzie logowanie brac prawdziwe user id
                .build());
    }

    void delete(String id) {
        taskRepository.delete(id);
    }
}