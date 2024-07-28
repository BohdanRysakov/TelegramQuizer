package test

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.PropertySource
import org.springframework.stereotype.Service

@Service
@PropertySource("application.yaml")
class TgtestBot(
    @Value("telegram.token")
    private val token: String,
) {
    fun start() {

    }
}
