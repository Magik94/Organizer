package pl.szul.organizer.day.query;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DayQueryRepository extends MongoRepository<DayDocument,String> {
    List<DayDocument> findByYearAndMonth(Integer year, Integer month);
}
