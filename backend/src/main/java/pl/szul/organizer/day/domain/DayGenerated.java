package pl.szul.organizer.day.domain;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.stream.LongStream;


@AllArgsConstructor
@Slf4j
class DayGenerated {

    private DayRepository dayRepository;

    @PostConstruct
    public void init() {
        if (dayRepository.findAll().isEmpty()) {
            final DayDocument[] date = {dayRepository.save(initDate())};
            LongStream.range(0, 100000L).forEachOrdered(r ->
                    date[0] = addDay(date[0])
            );
        } else {
            log.info(">>> Data in day is available <<<");
        }

    }

    private DayDocument initDate() {
        LocalDate startDate = LocalDate.of(2000, 1, 1);
        return DayDocument.builder()
                .localDate(startDate)
                .year(startDate.getYear())
                .month(startDate.getMonth().getValue())
                .dayOfYear(startDate.getDayOfYear())
                .day(startDate.getDayOfMonth())
                .dayOfWeek(startDate.getDayOfWeek().getValue())
                .build();
    }

    private DayDocument addDay(DayDocument oldDay) {
        DayDocument newDay = dayRepository.save(buildDay(oldDay));
        oldDay.setNextDay(newDay.getId());
        dayRepository.save(oldDay);
        return newDay;
    }

    private DayDocument buildDay(DayDocument oldDay) {
        LocalDate newDate = oldDay.getLocalDate().plusDays(1);
        return DayDocument.builder()
                .localDate(newDate)
                .year(newDate.getYear())
                .month(newDate.getMonth().getValue())
                .dayOfYear(newDate.getDayOfYear())
                .day(newDate.getDayOfMonth())
                .dayOfWeek(newDate.getDayOfWeek().getValue())
                .previousDay(oldDay.getId())
                .build();
    }


}
