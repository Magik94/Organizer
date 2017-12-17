package pl.szul.organizer.mail.domain;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
class EmailConfiguration {


    @Bean
    EmailService emailSender() {
        return new EmailServiceImpl();
    }

    @Bean
    EmailFacade emailFacade(EmailService pEmailSender) {
        return new EmailFacade(pEmailSender);
    }


}
