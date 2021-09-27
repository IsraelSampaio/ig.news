module.exports = {
  testIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "ˆ.+\\.(js|jsx|ts|tsx)": "<rootDir>/node_modules/babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTest.ts"],
  testEnvironment: "jsdom",
};
