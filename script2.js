// Update time and date
function updateDateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    const dateString = now.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Update battery information
function updateBatteryInfo() {
    const batteryBarFill = document.getElementById('battery-bar-fill');
    const batteryElement = document.getElementById('battery');
    const distanceElement = document.getElementById('distance');
    const averageElement = document.getElementById('average');

    // Use the values from the HTML
    const percentage = 85;
    const remaining = 204;
    const average = 128;

    batteryBarFill.style.height = `${percentage}%`;
    batteryElement.textContent = percentage;
    distanceElement.textContent = remaining;
    averageElement.textContent = average;
}

// Initialize start button
function initStartButton() {
    const startButton = document.querySelector('.start-circle');
    startButton.addEventListener('click', () => {
        console.log('Drive mode started');
        // Add your start functionality here
    });
}

// Open new page function for toolbar buttons
function openNewPage(url) {
    console.log(`Opening: ${url}`);
    // Implement the page opening logic here
    // For example, you could use window.location.href = url;
    // Or implement a single-page application logic
}

// Initial call to update time and battery information
updateDateTime();
updateBatteryInfo();
initStartButton();

// Update time every minute
setInterval(updateDateTime, 60000);

// You may want to add event listeners for the toolbar buttons