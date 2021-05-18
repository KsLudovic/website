// not a good function need to work around it a bit
var textarea = document.getElementById("message");
textarea.onkeyup = function() {
  var lines = textarea.value.split("\n");
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length <= 50) continue;
    var j = 0;
    space = 50;
    while (j++ <= 50) {
      if (lines[i].charAt(j) === " ") space = j;
    }
    lines[i + 1] = lines[i].substring(space + 1) + (lines[i + 1] || "");
    lines[i] = lines[i].substring(0, space);
  }
  textarea.value = lines.slice(0, 8).join("\n");
};


function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    // for multi-selects, we need special handling
    formJSON.comp = data.getAll('comp');
    
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);

    // logs in the console content of json file
    console.log(results.innerText);
    // 
  download(results.innerText, 'Form_Data_.json','application/json');
  
  }

  // download function because i have no idea how to edit locally json and assume its not possible
  function download(text, name, type)
    {
        var file = new Blob([text], {type: type});
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        if (isIE)
        {
            window.navigator.msSaveOrOpenBlob(file, name);
        }
        else
        {
            var a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.download = name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
     }


  
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', handleFormSubmit);

  function callback(err) {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  }
  
