require([ 'eve', 'Raphael', 'flowchart-latest', 'lib/marked', 'highlight' ], function ($, $, flow, marked, highlight)
{


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

