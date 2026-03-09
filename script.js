function generateWhatsAppLink() {
  // 1. Get the message from the textarea
  var message = document.getElementById("messageBox").value;

  // 2. URL-encode the message to handle spaces and special characters
  var encodedMessage = encodeURIComponent(message);

  // 3. Define your WhatsApp number in full international format (without + or dashes)
  var yourPhoneNumber = "2349169370962"; // Replace with your number (e.g., 44768483016)

  // 4. Construct the WhatsApp URL using the wa.me protocol
  var whatsappURL =
    "https://wa.me/" + yourPhoneNumber + "?text=" + encodedMessage;

  // 5. Set the dynamically generated URL as the href attribute of the link
  document.getElementById("whatsappLink").setAttribute("href", whatsappURL);

  // Optional: Provide immediate feedback if the textarea is empty
  if (message === "") {
    alert("Please enter a message before sending.");
  }
}
