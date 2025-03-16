import dotenvFlow from "dotenv-flow";
dotenvFlow.config();

export default {
  ENV: process.env.ENV,
  PORT: process.env.PORT,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};
