function submitForm() {
    // Get the form element
    var form = document.getElementById("form");
    // Submit the form
    form.submit();
    // Navigate to another page
    window.location.href = "WelcomePage.html";
}

function handleCheckboxChange(clickedCheckbox) {
    // Get all checkboxes in the group
    const checkboxes = document.getElementsByName("Visited_Earler");

    // Uncheck all checkboxes except the one that was clicked
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== clickedCheckbox) {
        checkboxes[i].checked = false;
      }
    }
  }

// document.getElementById("doctor-form").addEventListener("submit", function(event) {
//     var contactNumber = document.getElementById("contact-number").value;
  
//     // Check if the contact number is exactly 10 digits
//     if (contactNumber.length !== 10 || isNaN(contactNumber)) {
//       alert("Please enter a valid 10-digit contact number");
//       event.preventDefault(); // Prevent form submission
//     } else {
//         submitForm();
//     }
// });