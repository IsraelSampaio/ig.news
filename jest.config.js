module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)": "<rootDir>/node_modules/babel-jest",
  },

  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTest.ts"],

  testEnvironment: "jsdom",

  moduleNameMapper: {
    "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
  },
};
