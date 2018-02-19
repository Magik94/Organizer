package pl.szul.organizer.task.query;

import org.apache.tomcat.jni.Local;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

@RepositoryRestResource(collectionResourceRel = "task", path = "taskq")
public interface TaskQueryRepository extends MongoRepository<TaskDocument,String> {


    Set<TaskDocument> findByDateStartStringAndUserId(@Param("dateStart")String pLocalDate,@Param("user") String user);

    List<TaskDocument> findByUserId(String pTestUser);

    @Query(value = "{ 'userId' : ?0, 'createDate' : {$gte : ?1, $lt : ?2 }} }",count = true)
    Long getNewTask(String pUser, Date startDate, Date  endDate);
}
