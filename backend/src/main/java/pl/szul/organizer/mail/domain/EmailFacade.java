package pl.szul.organizer.mail.domain;

import pl.szul.organizer.mail.EmailSender;

import java.util.Set;
import java.util.TreeSet;

public class EmailFacade implements EmailSender{

    private EmailService emailService;

    public EmailFacade(EmailService pEmailService) {
        emailService = pEmailService;
    }

    public void send() {
        Set<String> addres = new TreeSet<>();
        addres.add("dedly04@gmail.com");
        addres.add("dawidszul94@gmail.com");
        emailService.send(addres, "Test mail from Spring", "Final test");
       // emailService.send(pEmail,pTitle,pMessage);
    }
}
