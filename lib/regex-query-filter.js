QueryFilter = {};

QueryFilter._buildRegExp = function(query) {
  query = query || "";

  var afterFilteredRegExpChars = query.replace(QueryFilter._getRegExpFilterRegExp(), "\\$&");
  var parts = afterFilteredRegExpChars.trim().split(' ');

  return new RegExp("(" + parts.join('|') + ")", "ig");
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