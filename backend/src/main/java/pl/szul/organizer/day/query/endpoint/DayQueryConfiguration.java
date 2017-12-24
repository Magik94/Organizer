package pl.szul.organizer.day.query.endpoint;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pl.szul.organizer.day.query.DayQueryRepository;

@Configuration
class DayQueryConfiguration {

    @Bean
    DayController dayController(DayQueryRepository pDayQueryRepository){
        return new DayController(pDayQueryRepository);
    }
}
