package de.tm.textadventuregame.model

import java.util.UUID
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Choice(
    @Id
    @GeneratedValue
    val id: UUID = UUID.randomUUID(),
    @Column
    val storyId: UUID = UUID.randomUUID(),
    @Column
    val startingNonTerminal: String = "S",
    @Column
    val chosenTerminal: String = "a",
    @Column
    val followingNonTerminal: String? = "A",
    @Column
    val choiceText: String = "",
    @Column
    val isEnding: Boolean = false
)
