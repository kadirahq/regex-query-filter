QueryFilter = {};

QueryFilter._buildRegExp = function(query) {
  query = query || "";

  var afterFilteredRegExpChars = query.replace(QueryFilter._getRegExpFilterRegExp(), "\\$&");
  var parts = afterFilteredRegExpChars.trim().split(" ");

  return new RegExp("(" + parts.join("|") + ")", "ig");
};

QueryFilter._getRegExpFilterRegExp = _.once(function() {
  var regExpChars = [
    "\\", "^", "$", "*", "+", "?", ".",
     "(", ")", ":", "|", "{", "}", "[", "]",
     "=", "!", ","
  ];
  var regExpCharsReplace = _.map(regExpChars, function(c) {
    return "\\" + c;
  }).join("|");
  return new RegExp("(" + regExpCharsReplace + ")", "g");
});

QueryFilter._isExactPhrase = function(query) {
  var patt = new RegExp(/(\"([A-Za-z0-9_ '-:;@^#&()=$!]+)\")/g); // check for ""
  return patt.test(query);
};