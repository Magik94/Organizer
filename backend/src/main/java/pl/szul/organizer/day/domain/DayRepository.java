package pl.szul.organizer.day.domain;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface DayRepository extends MongoRepository<DayDocument,String> {
}
