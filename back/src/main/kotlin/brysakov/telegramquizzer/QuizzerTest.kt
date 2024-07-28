package brysakov.telegramquizzer

import org.springframework.stereotype.Service
import org.telegram.telegrambots.bots.TelegramLongPollingBot
import org.telegram.telegrambots.meta.api.methods.send.SendMessage
import org.telegram.telegrambots.meta.api.objects.Update
import org.telegram.telegrambots.meta.exceptions.TelegramApiException

@Service
class QuizzerTest : TelegramLongPollingBot("7342166171:AAHBYg-aJ3KRi7ZFhpq6Cr0nfR-d9sYF7jo") {

    override fun getBotUsername(): String = "zno_mini_app"

    override fun onUpdateReceived(update: Update) {
        println(update.message.chatId)
        sendMessage(update.message.chatId, "${update.message.from.userName}, іді Нахуй")
    }


    private fun sendMessage(chatId: Long, textToSend: String) {
        val sendMessage = SendMessage()
        sendMessage.chatId = chatId.toString()
        sendMessage.text = textToSend
        try {
            execute(sendMessage)
        } catch (e: TelegramApiException) {
        }
    }
}
