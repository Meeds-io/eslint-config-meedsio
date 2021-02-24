const assert = require('assert');
const {CLIEngine, ESLint} = require('eslint');
const eslintrc = require('../');

const eslintCli = new (CLIEngine || ESLint)({
  useEslintrc: false,
  baseConfig: eslintrc
});

const eslintReport = eslintCli.executeOnFiles([
  'index.js',
  'test/test.js',
]);
assert.equal(0, eslintReport.errorCount);
assert.equal(0, eslintReport.warningCount);