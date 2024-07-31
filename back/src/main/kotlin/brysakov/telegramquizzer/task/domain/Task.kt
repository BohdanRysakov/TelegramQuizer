package brysakov.telegramquizzer.task.domain

import brysakov.telegramquizzer.task.domain.value.Answer
import brysakov.telegramquizzer.task.domain.value.SubjectId

data class Task(
    val id: String,
    val subjectId: SubjectId,
    val image: ByteArray,
    val text: String,
    val answer: Answer,
)
