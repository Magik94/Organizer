package pl.szul.organizer.day.query.endpoint;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.szul.organizer.day.query.DayDocument;
import pl.szul.organizer.day.query.DayQueryRepository;

import java.time.LocalDate;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping("month")
class DayController {

    private DayQueryRepository dayQueryRepository;

    @GetMapping
    private ResponseEntity getMonth(@RequestParam Optional<String> id) {
        LocalDate localDate = getLocalDate(id);
        return ResponseEntity.ok()
                .body(dayQueryRepository.findByYearAndMonth(localDate.getYear(),
                        localDate.getMonth().getValue()));
    }

    private LocalDate getLocalDate(Optional<String> id) {
        LocalDate localDate = LocalDate.now();
        if (id.isPresent()) {
            DayDocument day = dayQueryRepository.findOne(id.get());
            localDate = day.getLocalDate();
        }
        return localDate;
    }
}
