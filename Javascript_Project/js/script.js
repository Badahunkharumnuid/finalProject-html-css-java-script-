/*Name this external file gallery.js*/

function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = `url(${previewPic.src})`;
    document.getElementById("image").innerHTML = previewPic.alt;
   }

   function unDo(){

       const originalImageUrl = window.getComputedStyle(document.getElementById("image")).backgroundImage.match(/url\(['"']?([^'"]+)['"']?\)/)[1];
       const originalText = document.getElementById("image").innerHTML;
   
       document.getElementById("image").style.backgroundImage = `url()`;
       document.getElementById("image").innerHTML = originalText;
   }

   // Function to add the tabfocus attribute
function addTabFocus() {
        console.log("Event triggered"); // Logging a message to console to ensure event triggers
        var images = document.getElementsByClassName("preview");
        for (var i = 0; i < images.length; i++) {
         images[i].setAttribute("tabindex", "0");
        }
    }
    window.onload = function() {
            addTabFocus();
        }
    addTabFocus();
