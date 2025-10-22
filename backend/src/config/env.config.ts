import { getEnv } from "../utils/get-env";

const envConfig = () => ({
    PORT: getEnv("PORT", "8000"),
    NODE_ENV: getEnv("NODE_ENV", "development"),
    MONGO_URI: getEnv("MONGO_URI", ""),
    JWT_SECRET: getEnv("JWT_SECRET", "your_jwt_secret_key"),
    JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15m"),
    JWT_REFRESH_SECRET:getEnv("JWT_REFRESH_SECRET","your_jwt_refresh_secret_key"),
    JWT_REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "7d"),
    GEMINI_API_KEY: getEnv("GEMINI_API_KEY", ""),
    CRON_SECRET: getEnv("CRON_SECRET", "your_cron_secret_key"),
    FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "http://localhost:3000")
});

export const Env = envConfig();