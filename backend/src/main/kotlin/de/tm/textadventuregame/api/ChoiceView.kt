package de.tm.textadventuregame.api

data class ChoiceView(
    val startingNonTerminal: String,
    val chosenTerminal: String,
    val followingNonTerminal: String?,
    val choiceText: String,
    val isEnding: Boolean
)
