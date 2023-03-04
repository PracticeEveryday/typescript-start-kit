import * as dotenv from "dotenv";

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(".env 파일이 없습니다!!");
}

// const MONGO_URL = process.env["MONGO_URL"];
// if (!MONGO_URL) {
//   throw new Error(".env에 MONGO URL이 없습니다.");
// }

// const JWT_KEY = process.env["JWT_KEY"]
// if (!JWT_KEY) {
//   throw new Error(".env에 JWT_KEY가 없습니다.");
// }

export default {
  // 백엔드 포트번호
  PORT: process.env["PORT"] || 5000,

  // 데이터베이스 URI
//   MONGO_URL,

  // jwt key
//   JWT_KEY,
};