import axios from "axios";

export const callGetStoryList = () => axios.get('/story/all')