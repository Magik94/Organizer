package pl.szul.organizer.event;


import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/event")
class EventController {
    private final EventRepository eventRepository;

    EventController(EventRepository pEventRepository) {
        eventRepository = pEventRepository;
    }

    @GetMapping
    public ResponseEntity getEvents(){
        return ResponseEntity.ok().body(eventRepository.findAll(new PageRequest(0,5, Sort.Direction.DESC,"id")));
    }



}
