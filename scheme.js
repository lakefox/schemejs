module.exports = scheme;

function scheme(json) {
  // Run Against
  this.rag = async (query) => {
    var output = {};
    var queryKeys = Object.keys(query);
    for (var i = 0; i < queryKeys.length; i++) {
      var queryScheme = query[queryKeys[i]];
      if (json[queryKeys[i]]) {
        var jsonScheme = json[queryKeys[i]].client;
      } else {
        return `{"error": "Error: Schemes Don't Match"}`;
      }
      var jsonSchemeKeys = Object.keys(jsonScheme);
      for (var a = 0; a < jsonSchemeKeys.length; a++) {
        if (typeof queryScheme[jsonSchemeKeys[a]] != typeof jsonScheme[jsonSchemeKeys[a]]) {
          return `{"error": "Error: Schemes Don't Match"}`;
        }
      }
      var serverScheme = json[queryKeys[i]].server;
      var serverSchemeKeys = Object.keys(serverScheme);
      for (var b = 0; b < serverSchemeKeys.length; b++) {
        if (typeof serverScheme[serverSchemeKeys[b]] == "function") {
          output[serverSchemeKeys[b]] = await serverScheme[serverSchemeKeys[b]](queryScheme);
        }
      }
    }
    return output;
  }
}
