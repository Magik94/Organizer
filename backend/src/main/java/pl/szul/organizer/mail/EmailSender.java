package pl.szul.organizer.mail;

public interface EmailSender {

    void send(String pEmail,String pTitle, String pMessage);
}
