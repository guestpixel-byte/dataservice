function addToWaitlist(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    document.getElementById('confirmationMessage').innerText = `Thank you for joining the waitlist, ${email}!`;
    document.getElementById('waitlistForm').reset();
}
