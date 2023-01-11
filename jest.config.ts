export default {
    moduleFileExtensions: ["ts", "tsx", "js"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testMatch: [
      "**/*.spec.ts",
      "**/*.test.ts",
    ],
    testEnvironment: "node",
  };