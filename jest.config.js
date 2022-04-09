module.exports = {
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    setupFiles: [
        '<rootDir>/env.jest.ts', //set env variable for jest
    ],
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        'src/**/*.ts',
        '!<rootDir>/node_modules/',
        '!src/index.ts',
        '!src/**/*.d.ts',
        '!src/**/models/*.ts',
        '!src/**/*.dataset.ts',
        '!<rootDir>/path/to/dir/',
    ],
    "coverageReporters": [
        "json-summary",
        "lcov"
    ],
    "coveragePathIgnorePatterns": [
        "<rootDir>/src/tracer.ts" 
    ],
    "coverageReporters": ["json-summary"]
    // "coverageThreshold": {
    //   "global": {
    //     "branches": 100,
    //     "functions": 100,
    //     "lines": 100,
    //     "statements": 100
    //   }
    // }
};
