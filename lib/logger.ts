import pino from "pino";

const isEdge = process.env.NEXT_RUNTIME === "edge";
const isProduction = process.env.NODE_ENV === "production";

const logger = pino({
    level: process.env.LOG_LEVEL || "info", // Default to 'info' if LOG_LEVEL is not set
    transport: !isEdge && !isProduction
        ? {
              target: "pino-pretty",
              options: {
                  colorize: true,
                  ignore: "pid,hostname",
                  translateTime: "SYS:standard",
              },
          }
        : undefined,
    formatters: {
        level: (label) => ({ level: label.toUpperCase() }), // Ensure uppercase levels
    },
    timestamp: pino.stdTimeFunctions.isoTime, // ISO timestamp
});

export default logger;
