package pl.szul.organizer.event;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventRepository extends MongoRepository<EventStore,String> {
}
