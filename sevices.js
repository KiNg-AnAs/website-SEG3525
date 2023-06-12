function submitBooking() {
    // Retrieve selected values
    var selectedCoach = document.getElementById("coach-select").value;
    var selectedService = document.getElementById("service-select").value;
    var selectedDay = document.getElementById("day-select").value;
    var selectedTime = document.getElementById("time-select").value;
    
    // Perform actions based on the selected values
    console.log("Coach: " + selectedCoach);
    console.log("Service: " + selectedService);
    console.log("Day: " + selectedDay);
    console.log("Time: " + selectedTime);
    
    // Add your own logic here to handle the booking submission
}

// Define the coach availabilities
var coachAvailabilities = {
    conor: ['monday', 'tuesday', 'friday'],
    sophia: ['thursday', 'wednesday'],
    larry: ['thursday', 'wednesday'],
    parveen: ['thursday', 'wednesday'],
    adam: ['monday', 'tuesday', 'friday'],
    amanda: ['monday', 'tuesday', 'friday']
  };
  
  // Function to handle the "Book Now" button click
  function goToPayment() {
    var coachSelect = document.getElementById('coach-select');
    var selectedCoach = coachSelect.value;
    var availabilities = coachAvailabilities[selectedCoach];
  
    // Get the selected values for service, day, and time
    var serviceSelect = document.getElementById('service-select').value;
    var daySelect = document.getElementById('day-select').value;
    var timeSelect = document.getElementById('time-select').value;
  
    // Check if the selected day is available for the coach
    if (availabilities.includes(daySelect)) {
      // Process the booking logic
      // ...
  
      // Display a success message
      alert('Booking successful!');
    } else {
      // Display an error message if the selected day is not available for the coach
      alert('This coach is not available on ' + daySelect + '. Please choose another day.');
    }
  }
  
  // Function to update the available days based on the selected coach
  function updateAvailability() {
    var coachSelect = document.getElementById('coach-select');
    var selectedCoach = coachSelect.value;
    var availabilities = coachAvailabilities[selectedCoach];
  
    // Clear the previous options in the day select
    var daySelect = document.getElementById('day-select');
    daySelect.innerHTML = '';
  
    // Add the available days as options
    for (var i = 0; i < availabilities.length; i++) {
      var option = document.createElement('option');
      option.value = availabilities[i];
      option.text = capitalizeFirstLetter(availabilities[i]);
      daySelect.appendChild(option);
    }
  }
  
  // Function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Add an event listener to the coach select to update the availability when the selection changes
  document.getElementById('coach-select').addEventListener('change', updateAvailability);
  

function confirmPayment() {
    const name = document.getElementById('name').value;
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const cvv = document.getElementById('cvv').value;
  
    // Check if all payment information is provided
    if (name && cardName && cardNumber && cvv) {
        const successMessage = `Thank you ${name} for choosing RecoverNow. Your reservation has been successfully confirmed. We look forward to assisting you. Check your email for more details.`;
    
        // Display success message in the alert
        document.getElementById('success-message').textContent = successMessage;
        document.getElementById('success-alert').style.display = 'block';
    
        // Hide the payment section
        document.getElementById('payment-section').style.display = 'none';
        
        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('card-name').value = '';
        document.getElementById('card-number').value = '';
        document.getElementById('cvv').value = '';
    } else {
        // Display an error message if any payment information is missing
        alert('Please fill in all payment information.');
    }
}
