import axios from "axios";

export const callGetStoryList = () => axios.get(`http://localhost:8080/story/all`);
