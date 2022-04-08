package de.tm.textadventuregame

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TextAdventureGameApplication

fun main(args: Array<String>) {
    runApplication<TextAdventureGameApplication>(*args)
}
