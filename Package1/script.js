const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  const pickupLocation = form.elements['pickup-location'].value.trim();
  const dropoffLocation = form.elements['dropoff-location'].value.trim();
  const pickupTime = form.elements['pickup-time'].value.trim();
  
  if (pickupLocation === '' || dropoffLocation === '' || pickupTime === '') {
    alert('Please fill all the fields');
    return;
  }
  
  const fare = calculateFare(pickupLocation, dropoffLocation);
  
  const bookingDetails = {
    pickupLocation: pickupLocation,
    dropoffLocation: dropoffLocation,
    pickupTime: pickupTime,
    fare: fare
  };
  
  generateBookingConfirmation(bookingDetails);
});

function calculateFare(pickupLocation, dropoffLocation) {
  // Add your fare calculation logic here
  const fare = 200;
  return fare;
}

function generateBookingConfirmation(bookingDetails) {
  const confirmationMessage = `Thank you for booking with us. Your pickup location is ${bookingDetails.pickupLocation}, your dropoff location is ${bookingDetails.dropoffLocation}, your pickup time is ${bookingDetails.pickupTime}, and your fare is ${bookingDetails.fare} INR. Please wait for your auto to arrive.`;
  alert(confirmationMessage);
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('booknow').addEventListener('click', function(event) {
     alert("Congratulations! Your booking is confirmed. Enjoy your stay!"); 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('booknow1').addEventListener('click', function(event) {
     alert("Congratulations! Your booking is confirmed. Enjoy your stay!"); 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('booknow2').addEventListener('click', function(event) {
     alert("Congratulations! Your booking is confirmed. Enjoy your stay!"); 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('booknow3').addEventListener('click', function(event) {
     alert("Congratulations! Your booking is confirmed. Enjoy your stay!"); 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('booknow4').addEventListener('click', function(event) {
     alert("Congratulations! Your booking is confirmed. Enjoy your Vacations!"); 
  });
});
// Initialize ScrollReveal
ScrollReveal().reveal(' .head, .about-desc , .heading , .row1 , .row2 , .card, .review-block, .blog1 , .blog2 , .book , .gmap , .footercon', {
  delay: 300,
  duration: 5000,
  origin: 'bottom',
  reset: false, // Set reset to false to prevent content from disappearing
  opacity: 0, // Start with opacity 0
  beforeReveal: function (domEl) {
    // Add the animate__bounceInUp class to the element
    domEl.classList.add('animate__animated', 'animate__fadeInUpBig');
  },
  afterReveal: function (domEl) {
    // Remove the animate__bounceInUp class from the element after animation
    domEl.classList.remove('animate__animated',  'animate__fadeInUpBig');
  }
});