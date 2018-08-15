"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('./commit-types.json');
var conventionalCommitScopes = require('./commit-scopes.json');

module.exports = engine({
  types: conventionalCommitTypes,
  scopes: conventionalCommitScopes
});
