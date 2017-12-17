package pl.szul.organizer.mail.domain;

interface EmailService {

    void send(String pEmail,String pTitle, String pMessage);
}