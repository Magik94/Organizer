package pl.szul.organizer.user.domain;


import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<UserDocument, Long> {
    Optional<UserDocument> findByUsername(String pUsername);
}
