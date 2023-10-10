window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

// // Function to get visitor count from Local Storage
// function getVisitorCount() {
//     let count = localStorage.getItem('visitorCount');

//     if (count === null) {
//         count = 0;
//     }

//     return parseInt(count, 10);
// }

// // Function to update visitor count in Local Storage
// function updateVisitorCount(count) {
//     localStorage.setItem('visitorCount', count);
// }

// // Function to display visitor count in the HTML
// function displayVisitorCount() {
//     const countElement = document.getElementById('visitor-count');
//     const currentCount = getVisitorCount() + 1;  // Increment the count by 1 for the current visit

//     updateVisitorCount(currentCount);  // Update the count in Local Storage

//     countElement.textContent = currentCount;  // Display the count on the page
// }

// // Run the function when the page loads
// window.addEventListener('load', displayVisitorCount);


