module.exports = {
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/", "/.next/"],
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.ts(x)", "!src/pages/**"],
	setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};
