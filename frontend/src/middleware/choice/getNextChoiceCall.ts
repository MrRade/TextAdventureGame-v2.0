import axios from "axios";

const getNextChoiceUrl = (id: string) => 'http://localhost:8080/story/getNextChoice/' + id;

export const callGetNextChoice = (id:string, originalNonTerminal:string, chosenTerminal:string) => axios.post(
    getNextChoiceUrl(id),
    {
        originalNonTerminal: originalNonTerminal,
        chosenTerminal: chosenTerminal
    })