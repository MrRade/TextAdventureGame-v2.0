package de.tm.textadventuregame.repository

import de.tm.textadventuregame.model.Story
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface StoryRepository: JpaRepository<Story, UUID> {
}