package pl.szul.organizer.task.domain;

import pl.szul.organizer.event.EventRepository;
import pl.szul.organizer.event.EventStore;
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
    private EventRepository eventRepository;


    TaskService(TaskRepository pTaskRepository, UserService pUserService, EmailFacade pEmailFacade, EventRepository pEventRepository) {
        taskRepository = pTaskRepository;
        userService = pUserService;
        emailFacade = pEmailFacade;
        eventRepository = pEventRepository;
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
                .userId(Optional.ofNullable(pTaskDto.getUser()).orElse(name))
                .createDate(Optional.ofNullable(pTaskDto.getId()).map(r -> taskRepository.findOne(r).getCreateDate()).orElse(LocalDate.now()))
                .build());
        if (pTaskDto.getId() == null) {
            eventRepository.save(EventStore.builder()
                    .username(userService.getName())
                    .status("added")
                    .date(LocalDate.now())
                    .body("Dodano task " + pTaskDto.getTitle())
                    .build());
            emailFacade.send("Dodano zadanie", "Zadanie <b>" + pTaskDto.getTitle() + "</b> zostało dodane! <br>" + pTaskDto);
        }
        else {
            eventRepository.save(EventStore.builder()
                    .username(userService.getName())
                    .status("modify")
                    .date(LocalDate.now())
                    .body("Edytowano task " + pTaskDto.getTitle())
                    .build());
            emailFacade.send("Edytowano zadanie", "Zadanie <b>" + pTaskDto.getTitle() + "</b> zostało edytowane! <br>" + pTaskDto);

        }
    }

    void delete(String id) {
        TaskDocument one = taskRepository.findOne(id);
        taskRepository.delete(id);
        eventRepository.save(EventStore.builder()
                .username(userService.getName())
                .status("remove")
                .date(LocalDate.now())
                .body("Usunięto task " + one.getTitle())
                .build());
        emailFacade.send("Usunięto zadanie", "Zadanie <b> " + one.getTitle() + "</b> zostało usunięte!");
    }
}