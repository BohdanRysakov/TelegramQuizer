package brysakov.telegramquizzer

import org.springframework.context.event.ContextRefreshedEvent
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component
import org.telegram.telegrambots.meta.TelegramBotsApi
import org.telegram.telegrambots.meta.exceptions.TelegramApiException
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession


@Component
class BitInit(
    val bot: QuizzerTest
) {
    @EventListener(ContextRefreshedEvent::class)
    @Throws(TelegramApiException::class)
    fun init() {
        val telegramBotsApi = TelegramBotsApi(DefaultBotSession::class.java)
        try {
            telegramBotsApi.registerBot(bot)
        } catch (e: TelegramApiException) {
        }
    }
}
