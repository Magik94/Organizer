package pl.szul.organizer.task.domain;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
interface TaskRepository extends MongoRepository<TaskDocument,String> {
}
