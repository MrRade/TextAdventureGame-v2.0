package de.tm.textadventuregame.repository

import de.tm.textadventuregame.model.Choice
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface ChoiceRepository: JpaRepository<Choice, UUID> {
    fun findAllByStoryId(storyId: UUID): List<Choice>
    fun findAllByStoryIdAndStartingNonTerminal(storyId: UUID, startingNonTerminal: String): List<Choice>
}