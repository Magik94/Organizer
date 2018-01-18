package pl.szul.organizer.mail.domain;

import pl.szul.organizer.mail.EmailSender;

import java.util.Set;

public class EmailFacade implements EmailSender{

    private EmailService emailService;

    public EmailFacade(EmailService pEmailService) {
        emailService = pEmailService;
    }

    public void send(Set<String> pEmail, String pTitle, String pMessage) {
        emailService.send(pEmail,pTitle,pMessage);
    }
}
