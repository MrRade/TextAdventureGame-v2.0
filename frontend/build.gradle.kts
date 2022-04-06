tasks{
    register<Exec>("buildFrontend")
}

//tasks{
//    register<Exec>("startFrontend"){
//        group = "build"
//        description = "Builds the react frontend"
//        commandLine("npm", "start")
////        dependsOn("testFrontend")
//    }
////    register<com.moowork.gradle.node.yarn>("testFrontend"){
////        group = "validation"
////        yarnCommand("test")
////        setEnviroment(
////                mapOf(
////                        "CI" to true
////                )
////        )
////    }
//}