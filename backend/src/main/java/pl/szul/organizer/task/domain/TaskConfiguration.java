package pl.szul.organizer.task.domain;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pl.szul.organizer.event.EventRepository;
import pl.szul.organizer.infrastructure.security.UserService;
import pl.szul.organizer.mail.domain.EmailFacade;
import pl.szul.organizer.mail.domain.EmailService;

@Configuration
class TaskConfiguration {

    @Bean
    TaskFacade taskFacade(TaskService pTaskService) {
        return new TaskFacadeImpl(pTaskService);
    }

    @Bean
    EmailFacade emailFacade(EmailService pEmailService,UserService pUserService){
        return new EmailFacade(pEmailService,pUserService);
    }

    @Bean
    TaskService taskService(TaskRepository pTaskRepository, UserService pUserService, EmailFacade pEmailFacade, EventRepository pEventRepository) {
        return new TaskService(pTaskRepository,pUserService, pEmailFacade,pEventRepository);
    }

}
