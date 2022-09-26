var input=document.getElementsByTagName("input");
for(var i=0;i<input.length;i++){
    input[i].value="kanchan"+i;
}
var aTags = document.getElementsByTagName("a");
var searchText = "Gmail";
var found;

for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent == searchText) {
    found = aTags[i];
    break;
  }
}

found.textContent="Kanchan Kumar";