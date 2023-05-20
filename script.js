function Calculate(inputText, aselector, rotatedText) {
  var alphabeths = {
    russian: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
    english: "abcdefghijklmnopqrstuvwxyz",
    georgian: "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ",
  };

  function aindex(symbol, alphabeth) {
    for (var i = 0; i < alphabeth.length; ++i) {
      if (alphabeth[i] == symbol) return i;
    }
    return -1;
  }

  function rot(inputstr, rotation) {
    var res = "";
    for (var i = 0; i < inputstr.length; ++i) {
      var idx = aindex(inputstr[i].toLowerCase(), alphabeths[aselector]);
      if (idx != -1)
        res +=
          inputstr[i].toLowerCase() == inputstr[i]
            ? alphabeths[aselector][
                (idx + rotation) % alphabeths[aselector].length
              ]
            : alphabeths[aselector][
                (idx + rotation) % alphabeths[aselector].length
              ].toUpperCase();
      else res += inputstr[i];
    }
    return res;
  }
  const element = document.getElementById("demo");
  for (var i = 0; i < alphabeths[aselector].length; ++i) {
    var res = rot(inputText, i);
    //console.log(resIndex + res);
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const cellRot = document.createTextNode(`ROT ${i}`);
    cell.appendChild(cellRot);
    row.appendChild(cell);
    const cell1 = document.createElement("td");
    const cellText = document.createTextNode(`${res}`);
    cell1.appendChild(cellText);
    row.appendChild(cell1);

    element.appendChild(row);
  }

}

function solve(){
    let element = document.getElementsByTagName("tr"), index;
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }

    let text = document.getElementById('val').value;
    let lang = document.getElementById('lang').value;
    Calculate(text, lang);

}
