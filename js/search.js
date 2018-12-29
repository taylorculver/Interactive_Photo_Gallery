// Function to search through photo alt text and titles and 
// return only images containing a term.
// Inspired by...
// https://www.w3schools.com/howto/howto_js_filter_table.asp

function mySearch () {
	let input, filter, photos, img, i, term;
	// Get search term from input box
	input = document.getElementById("term");
	// Capitalize search term for data standardization
	filter = input.value.toUpperCase();
	// Get all photos from the gallery
	photos = document.getElementsByClassName("photo");
	// Loop through all photos in the gallery
	for (i = 0; i < photos.length; i++) {
	    // Get image tag from photo div
	    img = photos[i].getElementsByTagName("img")[0];
	    // If there are images...
	    if (img) {
	      // Look for the searched term in the alt OR title attribute
	      term = img.alt || img.title;
	      // If found, by identifying to have an index value greater than 0
	      if (term.toUpperCase().indexOf(filter) > -1) {
	        // Don't do anything
	        photos[i].style.display = "";
	      } else {
	      	// If not found, change the CSS styling for img display to none
	        photos[i].style.display = "none";
	      }
	    }       
	  }
	}