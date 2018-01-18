package pl.szul.organizer.mail.domain;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Set;


class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void send(Set<String> pEmail, String pTitle, String pMessage) {
        try{
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper;
            helper = new MimeMessageHelper(message, true);
            helper.setSubject(pTitle);
            helper.setTo(pEmail.toArray(new String[pEmail.size()]));
            helper.setText(pMessage, true);
            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }


    }
}
