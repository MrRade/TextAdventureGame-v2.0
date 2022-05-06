package de.tm.textadventuregame.service

import de.tm.textadventuregame.api.ChoiceView
import de.tm.textadventuregame.model.Choice
import de.tm.textadventuregame.model.Story
import de.tm.textadventuregame.repository.ChoiceRepository
import de.tm.textadventuregame.repository.StoryRepository
import io.mockk.clearAllMocks
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import java.util.UUID

class StoryServiceTest {

    private val storyRepository = mockk<StoryRepository>(relaxed = true)
    private val choiceRepository = mockk<ChoiceRepository>(relaxed = true)

    private lateinit var storyService: StoryService

    @BeforeEach
    fun init() {
        clearAllMocks()
        storyService = StoryService(
            storyRepository,
            choiceRepository
        )
    }

    @Test
    fun testGetAllStories() {
        val stories = listOf(
            Story(name = "Test1"),
            Story(name = "Test2")
        )
        every {
            storyRepository.findAll()
        }.returns(stories)

        assertThat(storyService.getAllStories()).isEqualTo(stories)
    }

    @Test
    fun testCreateStory() {
        val story = Story(name = "test")
        every {
            storyRepository.save(any())
        }.returns(story)

        val choices = listOf(
            Choice(
                UUID.randomUUID(),
                story.id,
                "S",
                "a",
                "A",
                "test",
                false
            ),
            Choice(
                UUID.randomUUID(),
                story.id,
                "A",
                "b",
                "B",
                "test",
                false
            )
        )
        every {
            choiceRepository.saveAll(choices)
        }.returns(choices)

        val choiceViews = listOf(
            ChoiceView(
                "S",
                "a",
                "A",
                "test",
                false
            ),
            ChoiceView(
                "A",
                "b",
                "B",
                "test",
                false
            )
        )

        storyService.createStory(story.name, choiceViews)

        verify(exactly = 1) {
            storyRepository.save(any())
            choiceRepository.saveAll<Choice>(any())
        }
    }

    @Test
    fun testGetNextChoice() {
        val storyId = UUID.randomUUID()
        val choices = listOf(
            Choice(
                UUID.randomUUID(),
                storyId,
                "S",
                "a",
                "A",
                "test",
                false
            ),
            Choice(
                UUID.randomUUID(),
                storyId,
                "A",
                "a",
                "A",
                "test",
                false
            ),
            Choice(
                UUID.randomUUID(),
                storyId,
                "A",
                "b",
                "B",
                "test",
                false
            ),
            Choice(
                UUID.randomUUID(),
                storyId,
                "X",
                "x",
                "X",
                "test",
                false
            )
        )
        every {
            choiceRepository.findAllByStoryId(any())
        }.returns(choices)

        every {
            choiceRepository.findAllByStoryIdAndStartingNonTerminal(
                storyId,
                "A"
            )
        }.returns(listOf(choices[1], choices[2]))

        val nextChoices = NextChoicesView(
            storyId,
            "A",
            listOf("a", "b"),
            "test",
            false
        )
        assertThat(
            storyService.getNextChoice(
                storyId,
                "S",
                "a"
            )
        ).isEqualTo(nextChoices)
    }
}
