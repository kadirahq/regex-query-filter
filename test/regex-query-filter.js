Tinytest.add("filter Query with just simple words", function(test) {
  var filteredQuery = QueryFilter._buildRegExp("sample Keyword");
  filteredQuery = String(filteredQuery);
  test.equal(filteredQuery, "/(sample|Keyword)/gi")
});

Tinytest.add("filter Query with some symbols", function(test) {
  var filteredQuery = QueryFilter._buildRegExp("sample Keyword with # $ / * // \\ =");
  var expectedFilteredQuery = "/(sample|Keyword|with|#|\\$|\\/|\\*|\\/\\/|\\\\|\\=)/gi";
  filteredQuery = String(filteredQuery);
  expectedFilteredQuery = String(expectedFilteredQuery);
  test.equal(filteredQuery, expectedFilteredQuery);
});