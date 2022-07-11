// JEST CONFIGS ACORDING TO: https://jestjs.io/pt-BR/docs/configuration

export default {
  clearMocks: true,
  coverageProvider: "v8",
  transform: {
    '.^\\.ts$': 'ts-jest'
  }
}
