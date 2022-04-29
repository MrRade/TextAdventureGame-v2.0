package de.tm.textadventuregame.service

import de.tm.textadventuregame.api.ChoiceView
import de.tm.textadventuregame.model.Choice
import de.tm.textadventuregame.model.Story
import de.tm.textadventuregame.repository.ChoiceRepository
import de.tm.textadventuregame.repository.StoryRepository
import org.springframework.stereotype.Service
import java.util.UUID
import kotlin.random.Random

@Service
class StoryService(
    val storyRepository: StoryRepository,
    val choiceRepository: ChoiceRepository
) {

    fun getAllStories(): List<Story> {
        return storyRepository.findAll()
    }

    fun createStory(name: String, choices: List<ChoiceView>): UUID {
        return storyRepository.save(Story(name = name)).id.also {
            choiceRepository.saveAll(
                getChoicesFromChoiceViews(it, choices)
            )
        }
    }

    private fun getChoicesFromChoiceViews(storyId: UUID, choices: List<ChoiceView>): List<Choice> {
        return choices.map {
            Choice(
                storyId = storyId,
                startingNonTerminal = it.startingNonTerminal,
                chosenTerminal = it.chosenTerminal,
                followingNonTerminal = it.followingNonTerminal,
                choiceText = it.choiceText,
                isEnding = it.isEnding
            )
        }
    }

    fun getNextChoice(storyId: UUID, originalNonTerminal: String, chosenTerminal: String): NextChoicesView {
        choiceRepository.findAllByStoryId(storyId).filter {
            it.startingNonTerminal == originalNonTerminal && it.chosenTerminal == chosenTerminal
        }.let {
            it[Random.nextInt(it.size)]
        }.let {
            return buildNextChoiceView(it)
        }
    }

    private fun buildNextChoiceView(choice: Choice): NextChoicesView {
        if (choice.followingNonTerminal == null) {
            return NextChoicesView(
                choice.storyId,
                null,
                listOf(),
                choice.choiceText,
                true
            )
        } else {
            getAllTerminalsFromChoices(
                choiceRepository.findAllByStoryIdAndStartingNonTerminal(
                    choice.storyId,
                    choice.followingNonTerminal
                )
            ).let {
                return NextChoicesView(
                    choice.storyId,
                    choice.followingNonTerminal,
                    it,
                    choice.choiceText,
                    false
                )
            }
        }
    }

    private fun getAllTerminalsFromChoices(choices: List<Choice>): List<String> {
        return choices.map {
            it.chosenTerminal
        }
    }
}
