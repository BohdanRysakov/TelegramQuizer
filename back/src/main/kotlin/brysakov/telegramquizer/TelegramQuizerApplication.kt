package brysakov.telegramquizer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TelegramQuizerApplication

fun main(args: Array<String>) {
    runApplication<TelegramQuizerApplication>(*args)
}
