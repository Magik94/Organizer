package pl.szul.organizer.task.domain;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import pl.szul.organizer.infrastructure.security.UserService;
import pl.szul.organizer.task.domain.dto.TaskDto;

class TaskService {
    private TaskRepository taskRepository;
    private UserService userService;

    TaskService(TaskRepository pTaskRepository, UserService pUserService) {
        taskRepository = pTaskRepository;
        userService=pUserService;
    }

    void addTask(TaskDto pTaskDto) {
        String name = userService.getName();
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
                .userId(name)
                .build());
    }

    void delete(String id) {
        taskRepository.delete(id);
    }
}