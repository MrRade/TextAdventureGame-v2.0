package de.tm.textadventuregame.api

import io.restassured.RestAssured
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest(
    webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT
)
class HelloWorldControllerTest {

    @Test
    fun testHelloWorld() {
        RestAssured.port = 8080

        val result = RestAssured.get("/helloWorld").then()
            .statusCode(200)
            .extract().body().asString()

        Assertions.assertThat(result).isEqualTo("Hello World! Brought to you by the TextAdventureGame (v2.0)!")
    }
}
