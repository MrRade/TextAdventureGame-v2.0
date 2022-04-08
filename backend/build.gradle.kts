import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "2.6.6"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    kotlin("jvm") version "1.6.10"
    kotlin("plugin.spring") version "1.6.10"

    id("com.diffplug.spotless") version "6.4.2"
    jacoco
}

group = "de.tm"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_11

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    implementation("org.springdoc:springdoc-openapi-ui:1.6.6")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "11"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

tasks.test {
    finalizedBy(tasks.jacocoTestReport) // report is always generated after tests run
}
tasks.jacocoTestReport {
    dependsOn(tasks.test) // tests are required to run before generating the report
}

val ktLintVersion = "0.39.0"
spotless {
    kotlin {
        ktlint(ktLintVersion)
        targetExclude("src/app/node_modules/**")
        target(
            "src/main/kotlin/**/*.kt",
            "src/test/kotlin/**/*.kt",
            "src/main/java/**/*.kt",
            "src/test/java/**/*.kt"
        )
    }
    kotlinGradle {
        ktlint(ktLintVersion)
        targetExclude("node_modules/**")
        targetExclude("build/**")
        target("build.gradle.kts")
    }
}

tasks.named("build") {
    dependsOn("spotlessCheck", "jacocoTestReport", "test")
}
