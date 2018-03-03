package pl.szul.organizer.mail.domain;

import java.util.Set;

public interface EmailService {

    void send(Set<String> pEmail, String pTitle, String pMessage);
}