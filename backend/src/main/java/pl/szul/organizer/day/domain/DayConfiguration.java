package pl.szul.organizer.day.domain;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pl.szul.organizer.day.query.DayQueryRepository;

import java.util.logging.Logger;

@Configuration
class DayConfiguration {

    @Bean
    DayGenerated dayGenerated(DayRepository pDayRepository){
        return new DayGenerated(pDayRepository);

    }

}
