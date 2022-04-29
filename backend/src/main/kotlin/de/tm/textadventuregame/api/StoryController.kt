package de.tm.textadventuregame.api

import de.tm.textadventuregame.model.Story
import de.tm.textadventuregame.service.NextChoicesView
import de.tm.textadventuregame.service.StoryService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

data class FlatChoice(
    val originalNonTerminal: String,
    val chosenTerminal: String
)

@RestController
@RequestMapping("/story")
class StoryController(
    val storyService: StoryService
) {

    @GetMapping("/all")
    fun getAllStories(): List<Story> {
        return storyService.getAllStories()
    }

    @PostMapping("/create/{storyName}")
    fun createStory(@PathVariable storyName: String, @RequestBody choices: List<ChoiceView>): UUID {
        return storyService.createStory(storyName, choices)
    }

    @PostMapping("/getNextChoice/{storyId}")
    fun getNextChoice(
        @PathVariable storyId: UUID,
        @RequestBody flatChoice: FlatChoice
    ): NextChoicesView {
        return storyService.getNextChoice(storyId, flatChoice.originalNonTerminal, flatChoice.chosenTerminal)
    }
}