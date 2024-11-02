import axios from "axios";

const data = () => {
  try {
    const res = axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log("res결과", res);
  } catch (error) {
    console.error(error);
  }
};

data();
