package pl.szul.organizer;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import rx.Observable;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

public class OrganizerApplicationTests {

	@Test
	public void contextLoads() {
        Observable.from(Arrays.asList("adam","jan","fff","jan"))
                .take(2)
                .subscribe(System.out::print);
	}

}
