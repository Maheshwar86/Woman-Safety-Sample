document.getElementById('reportForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendLocation, showError);
    } else {
        document.getElementById('status').textContent = "Geolocation is not supported by this browser.";
    }
});

function sendLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const issue = document.getElementById('issue').value;
    const medical = document.getElementById('medical').value;

    document.getElementById('status').textContent = `Location sent: ${latitude}, ${longitude}. Issue: ${issue}. Medical Assistance: ${medical}`;

    // Here you would send the location, issue, and medical data to the police station
    // For example, using an API call
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('status').textContent = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('status').textContent = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('status').textContent = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('status').textContent = "An unknown error occurred.";
            break;
    }
}

function callNumber(number) {
    window.location.href = `tel:${number}`;
}
