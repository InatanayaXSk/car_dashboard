
function updateBatteryInfo() {
    
    var batteryValue = Math.floor(Math.random() * (100 - 70 + 1)) + 70;

    
    document.getElementById('battery').textContent = batteryValue;

    var batteryBarFill = document.getElementById('battery-bar-fill');
    batteryBarFill.style.width = batteryValue + '%';

    var remainingDistance = Math.floor(batteryValue * 2.4); // 2.4 km per 1% battery
    document.getElementById('distance').textContent = remainingDistance;

    // Update average consumption (simulated)
    var averageConsumption = Math.floor(Math.random() * (150 - 100 + 1)) + 100;
    document.getElementById('average').textContent = averageConsumption;
}

// Function to update current date and time
function updateDateTime() {
    var now = new Date();

    // Update time
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    var timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
    document.getElementById('time').textContent = timeString;

    // Update date
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayOfWeek = days[now.getDay()];
    var month = months[now.getMonth()];
    var date = now.getDate();
    var dateString = dayOfWeek + ', ' + date + ' ' + month;
    document.getElementById('date').textContent = dateString;
}

// Function to handle mode button clicks
function handleModeButtonClick(mode) {
    console.log('Selected mode:', mode);
    // Add your logic for handling different modes here
}

// Function to handle toolbar button clicks
function handleToolbarButtonClick(action) {
    console.log('Toolbar action:', action);
    // Add your logic for handling toolbar actions here
}

// Initial call to update time and battery info
updateDateTime();
updateBatteryInfo();

// Update time and battery info every minute (adjust as needed)
setInterval(function() {
    updateDateTime();
    updateBatteryInfo();
}, 60000); // 60000 milliseconds = 1 minute

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to mode buttons
    var modeButtons = document.querySelectorAll('.mode-button');
    modeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var mode = this.querySelector('img').alt.split(' ')[0].toLowerCase();
            handleModeButtonClick(mode);
        });
    });

    // Add click event listeners to toolbar buttons
    var toolbarButtons = document.querySelectorAll('.icon-button');
    toolbarButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            handleToolbarButtonClick('action' + (index + 1));
        });
    });
});