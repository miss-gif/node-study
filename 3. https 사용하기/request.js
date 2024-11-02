const encrypt = () => {
  console.log("encrypt 암호화");
};

const send = (url, data) => {
  const encryptedData = encrypt(data);
  console.log(`send to ${url} with ${encryptedData}`);
};

console.log("request.js 파일 로딩됨");

export { send, encrypt };
