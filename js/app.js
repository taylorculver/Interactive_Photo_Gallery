// Ordered Object Literal of Photos for Gallery
const photos = [
	{
		src: "01.jpg",
		title: "Hay Bales",
		alt: "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
	},
	{	
		src: "02.jpg",
		title: "Lake",
		alt: "The lake was so calm today. We had a great view of the snow on the mountains from here.",
	},
	{
		src: "03.jpg",
		title: "Canyon",
		alt: "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
	},
	{
		src: "04.jpg",
		title: "Iceberg",
		alt: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
	},
	{
		src: "05.jpg",
		title: "Desert",
		alt: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
	},
	{
		src: "06.jpg",
		title: "Fall",
		alt: "Fall is coming, I love when the leaves on the trees start to change color.",
	},
	{
		src: "07.jpg",
		title: "Plantation",
		alt: "I drove past this plantation yesterday, everything is so green!",
	},
	{
		src: "08.jpg",
		title: "Dunes",
		alt: "My summer vacation to the Oregon Coast. I love the sandy dunes!",
	},
	{
		src: "09.jpg",
		title: "Countryside Lane",
		alt: "We enjoyed a quiet stroll down this countryside lane.",
	},
	{
		src: "10.jpg",
		title: "Sunset",
		alt: "Sunset at the coast! The sky turned a lovely shade of orange.",
	},
	{
		src: "11.jpg",
		title: "Cave",
		alt: "I did a tour of a cave today and the view of the landscape below was breathtaking.",
	},
	{
		src: "12.jpg",
		title: "Bluebells",
		alt: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.",
	},
]

// Function to load, build, and format all images to create a gallery
function gallery() {
		// Loop through photos in above ordered object literal
		$.each(photos, function (index, photo) {
			// Build image
			let image = $('<img>').attr({alt: photo.alt, src: 'images/thumbnails/' + photo.src, title: photo.title});
			// Design model for when image is clicked
			let imageModal = $('<a/>').attr({'data-lightbox': 'photos', 'data-title': photo.alt, href: 'images/' + photo.src});
			// Wrap image in Div
			let imageCard = $('<div/>').attr({id: index+1, class: 'photo'})
			// Wrap img in anchor tag in div and append to gallery ID
			image.appendTo('#gallery').wrap(imageCard).wrap(imageModal)
		});
		// Set options for lightbox 2, a jquery plugin
		lightbox.option({
			'fitImagesInViewport': true, 
			'showImageNumberLabel': false, 
			'wrapAround': true})
		// Refresh the browser window ever time it is resized to make images more responsive
		$(window).resize(function(){location.reload();});
	}

// Function to search through photo alt text and titles and return only images containing a term.
function search () {
		// Get and captitalize search term from input box
		let search_term = $("#term").val().toUpperCase();
		// Get all images from the gallery
		let images = $('img');
		// Loop through images
		$.each(images, function (index, image){
			// Lookup values will be either the alt or title attribute
			let lookup = image.alt || image.title
			// Capitalize lookup values and identify index of search term
			if (lookup.toUpperCase().indexOf(search_term) > -1) {
				// If search term is found within the lookup values show it
				$(image).show()
			}
			else {
				// ...is not found within the lookup values hide it
				$(image).hide()
			}
		})
	}