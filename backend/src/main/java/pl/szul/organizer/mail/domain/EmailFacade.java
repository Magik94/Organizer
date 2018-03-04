package pl.szul.organizer.mail.domain;

import pl.szul.organizer.infrastructure.security.UserService;
import pl.szul.organizer.mail.EmailSender;

import java.util.Set;
import java.util.TreeSet;

public class EmailFacade implements EmailSender{

    private EmailService emailService;
    private UserService userService;

    public EmailFacade(EmailService pEmailService, UserService pUserService) {
        emailService = pEmailService;
        userService = pUserService;
    }

    public void send(String title, String body) {
        Set<String> addres = new TreeSet<>();
        addres.add(userService.getName());
        emailService.send(addres, title, body);
    }
}
