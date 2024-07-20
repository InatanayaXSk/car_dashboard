document.addEventListener("DOMContentLoaded", function() {
    function updateTimeAndDate() {
        const now = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
        const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };

        const timeString = now.toLocaleTimeString('en-US', timeOptions);
        const dateString = now.toLocaleDateString('en-US', dateOptions);

        document.getElementById('time').textContent = timeString;
        document.getElementById('date').textContent = dateString;
    }

    function updateWeather() {
        // Mock weather data for demonstration
        const weatherIcon = 'images/weather-icon.svg';
        const temperature = '23°C / 27°C';

        document.getElementById('weather-icon').innerHTML = `<img src="${weatherIcon}" alt="Weather Icon">`;
        document.getElementById('temperature').textContent = temperature;
    }

    function updateBatteryInfo() {
        const distance = 204; // Mock distance
        const batteryPercentage = 85; // Mock battery percentage
        const averageConsumption = 128; // Mock average consumption

        document.getElementById('distance').textContent = distance;
        document.getElementById('battery').textContent = batteryPercentage;
        document.getElementById('average').textContent = averageConsumption;
        document.getElementById('battery-bar-fill').style.height = `${batteryPercentage}%`;
    }

    updateTimeAndDate();
    updateWeather();
    updateBatteryInfo();

    setInterval(updateTimeAndDate, 1000); // Update every second
});

function openNewPage(url) {
    window.open(url, '_blank');
}
