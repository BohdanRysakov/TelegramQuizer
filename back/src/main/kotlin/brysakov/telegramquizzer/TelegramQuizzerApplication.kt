package brysakov.telegramquizzer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TelegramQuizzerApplication

fun main(args: Array<String>) {
    runApplication<TelegramQuizzerApplication>(*args)
}
