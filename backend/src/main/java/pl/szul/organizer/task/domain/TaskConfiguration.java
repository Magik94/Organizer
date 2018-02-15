package pl.szul.organizer.task.domain;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pl.szul.organizer.infrastructure.security.UserService;

@Configuration
class TaskConfiguration {

    @Bean
    TaskFacade taskFacade(TaskService pTaskService) {
        return new TaskFacadeImpl(pTaskService);
    }

    @Bean
    TaskService taskService(TaskRepository pTaskRepository, UserService pUserService) {
        return new TaskService(pTaskRepository,pUserService);
    }

}
