package pl.szul.organizer.task.domain;

import pl.szul.organizer.infrastructure.security.UserService;
import pl.szul.organizer.task.domain.dto.TaskDto;

import java.time.LocalDate;
import java.util.Optional;
import java.util.Set;
import java.util.TreeSet;

import pl.szul.organizer.mail.domain.EmailFacade;

class TaskService {
    private TaskRepository taskRepository;
    private UserService userService;
    private EmailFacade emailFacade;


    TaskService(TaskRepository pTaskRepository, UserService pUserService, EmailFacade pEmailFacade) {
        taskRepository = pTaskRepository;
        userService = pUserService;
        emailFacade = pEmailFacade;
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
                .createDate(Optional.ofNullable(pTaskDto.getId()).map(r -> taskRepository.findOne(r).getCreateDate()).orElse(LocalDate.now()))
                .build());
    }

    void delete(String id) {
        taskRepository.delete(id);
        emailFacade.send();
    }
}