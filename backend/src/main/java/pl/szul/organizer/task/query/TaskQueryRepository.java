package pl.szul.organizer.task.query;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.Set;

@RepositoryRestResource(collectionResourceRel = "task", path = "taskq")
public interface TaskQueryRepository extends MongoRepository<TaskDocument,String> {

    Set<TaskDocument> findByDateStartString(@Param("dateStart")String pLocalDate);
}
