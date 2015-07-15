Package.describe({
  "summary": "Regular Expression Filter for Search Query",
  "version": "0.0.1",
  "git": "https://github.com/kadirahq/regex-query-filter",
  "name": "kadira:regex-query-filter"
});

Package.on_use(function(api) {
  api.use(["underscore@1.0.3"])
  api.export("QueryFilter", ["client", "server"]);
  api.add_files("lib/regex-query-filter.js", ["client", "server"]);
});

Package.on_test(function(api) {
  api.use([
    "kadira:regex-query-filter",
    "tinytest"
  ]);

  api.addFiles(["test/regex-query-filter.js"], "client");
});