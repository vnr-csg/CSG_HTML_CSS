/* probleem:
Hij verwijst naar:   https://vnr-csg.github.io/voorbeeldenVanVNR/index.html
Dat moet zijn:       https://vnr-csg.github.io/CSG_HTML_CSS/voorbeeldenVanVNR/index.html
*/


var linkLijst = [];

var elements = document.body.getElementsByTagName("a");

for(var i = 0; i < elements.length; i++) {
   var current = elements[i];
   // get element by content
   // https://gist.github.com/seutje/1069349
    if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
       // Check the element has no children && that it is not empty
       // linkLijst.push(current.textContent); // DEZE WERKT
       //current.newLink = current.href.split(1)[0] + "/CSG_HTML_CSS/";
       //current.end = current.href.split(current.href.split(1)[0]);
       //current.end = current.end[1].split("/");
       // current.href = "CSG_HTML_CSS/" + current.href;
       current.newLinkElements = current.href.split("/");
       
       current.href = current.newLinkElements[3] + "/CSG_HTML_CSS/" + current.newLinkElements[4];
       if (i == 0) {
         console.log(current.newLinkElements);
       }       
    }
}

// en dan op basis van de lijst het element zoeken
// en vullen met aanvulling + wat er stond.

//https://stackoverflow.com/questions/15439853/get-local-href-value-from-anchor-a-tag
// var test = document.getElementsByTagName("a").getAttribute("href");

console.log(linkLijst);

