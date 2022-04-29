package de.tm.textadventuregame.model

import java.util.UUID
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Story(
    @Id
    @GeneratedValue
    val id: UUID = UUID.randomUUID(),
    @Column
    val name: String = "Example Story"
)