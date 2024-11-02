import { send } from "./request.js";
import { read } from "./response.js";

const makeRequest = (url, data) => {
  // 요청 보내기
  send(url, data);
  // 데이터 return
  return read();
};

const response = makeRequest("https://example.com", "데이터");
console.log(response);
