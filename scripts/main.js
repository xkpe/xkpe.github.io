require(['highlight'], function (highlight) {
  requirejs(['lib/marked'], function (marked){
    // Synchronous highlighting with highlight.js
    marked.setOptions({
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    });

    var client = new XMLHttpRequest();
    client.open('GET', '../md/index.md');
    client.onreadystatechange = function() {
      document.getElementById('content').innerHTML =
        marked(client.responseText);
    }
    client.send();

  });
});

