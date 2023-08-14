var repo = "/CSG_HTML_CSS/";

var elements = document.body.getElementsByTagName("a");

for(var i = 0; i < elements.length; i++) {
   var current = elements[i];
    if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
       current.newLinkElements = current.href.split("/");
       var urlCheck = current.newLinkElements[2];
       var domain = "github";
   
      if(urlCheck.indexOf(domain) > -1){
         console.log("string");
         current.href = repo + current.newLinkElements[3] + "/" + current.newLinkElements[4];
      }      
       
       if (i == 0) {
         console.log(current.newLinkElements);
         console.log(current.newLinkElements[2]);
       }       
    }
}