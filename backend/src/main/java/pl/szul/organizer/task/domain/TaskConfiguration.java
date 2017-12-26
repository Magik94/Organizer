package pl.szul.organizer.task.domain;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class TaskConfiguration {

    @Bean
    TaskFacade taskFacade(TaskService pTaskService) {
        return new TaskFacadeImpl(pTaskService);
    }

    @Bean
    TaskService taskService(TaskRepository pTaskRepository) {
        return new TaskService(pTaskRepository);
    }

}
