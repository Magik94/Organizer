package pl.szul.organizer.mail;

import java.util.Set;

public interface EmailSender {

    void send(String title, String body);
}
