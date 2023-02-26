package de.tm.textadventuregame.api

import de.tm.textadventuregame.model.Story
import de.tm.textadventuregame.service.NextChoicesView
import de.tm.textadventuregame.service.StoryService
import org.springframework.web.bind.annotation.*
import java.util.UUID

data class FlatChoice(
    val originalNonTerminal: String,
    val chosenTerminal: String
)

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
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
