walk(document.body);

function walk(node)
{
  // OP stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;
    case 3: // Text node
      if (node.parentElement.tagName.toLowerCase() != "script") {
        handleText(node);
      }
    break;
  }
}

function handleText(textNode) {
  var v = textNode.nodeValue;

  // Fuck(er/ing/ed/staick/wad/etc...)
  v = v.replace(/([Ff])([\*\-uU][\*\-cC][\*\-kK]+([a-zA-z]+)?)/g, function(match, p1, p2, offset, string) {
    var subbed = match.charCodeAt(0) !== 70 || match.charCodeAt(3) !== 75 ? 'uck' : 'UCK';

    var p3 = p2.substr(3, 6);
    if (p3.charCodeAt(2) === 103 || p3.charCodeAt(2) === 71) {
      p2 = p3.charCodeAt(2) === 103 ? 'ing' : 'ING';
    }
    else {
      p2 = p2.substr(3);
    }
    return p1 + subbed + p2;
  });

  textNode.nodeValue = v;
  return v;
}

// var tests = [
//   'f***',
//   'F***',
//   'F**K',
//   'f***ing',
//   'F*CKED',
//   'F**KER',
//   'fuc*ed',
//   'fu**in',
//   'motherf***er',
//   'MOTHERF**KER',
//   'I thought it meant "For the F*****g Yes."',

//   'Fracking',
//   'Fickle',
// ];

// tests.forEach(function(fuck) {
//   console.log(handleText(fuck))
// })
