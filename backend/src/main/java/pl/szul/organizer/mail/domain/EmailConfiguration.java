package pl.szul.organizer.mail.domain;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pl.szul.organizer.mail.EmailSender;


@Configuration
class EmailConfiguration {


    @Bean
    EmailService emailService() {
        return new EmailServiceImpl();
    }

    @Bean
    EmailSender emailFacade(EmailService pEmailService) {
        return new EmailFacade(pEmailService);
    }


}
