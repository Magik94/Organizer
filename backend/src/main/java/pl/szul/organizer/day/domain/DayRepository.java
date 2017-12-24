package pl.szul.organizer.day.domain;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface DayRepository extends MongoRepository<DayDocument,String> {
}
