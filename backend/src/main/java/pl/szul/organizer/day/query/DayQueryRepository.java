package pl.szul.organizer.day.query;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;
@RepositoryRestResource(collectionResourceRel = "day", path = "day")
public interface DayQueryRepository extends MongoRepository<DayDocument,String> {
    List<DayDocument> findByYearAndMonth(Integer year, Integer month);

    @Override
    @PreAuthorize("hasRole('ROLE_USER')")
    DayDocument findOne(String pS);
}
