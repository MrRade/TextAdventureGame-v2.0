package de.tm.textadventuregame.api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/helloWorld")
class HelloWorldController {

    @GetMapping
    fun helloWorld(): String = "Hello World! Brought to you by the TextAdventureGame (v2.0)!"
}
