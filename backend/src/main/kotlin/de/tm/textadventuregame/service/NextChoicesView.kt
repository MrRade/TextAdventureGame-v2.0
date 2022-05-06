package de.tm.textadventuregame.service

import java.util.UUID

data class NextChoicesView(
    val storyId: UUID,
    val newNonTerminal: String?,
    val allPossibleTerminals: List<String>,
    val choiceText: String,
    val isEnding: Boolean
)
