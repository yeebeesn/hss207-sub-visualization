const yearSelect = document.getElementById('yearSelect');
const monthSelect = document.getElementById('monthSelect');
const monthRange = document.getElementById('monthRange');
const imageElement = document.getElementById('subwayImage');

// Populate year and month dropdowns
function populateDropdowns() {
    for (let year = 2012; year <= 2023; year++) {
        let option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    for (let month = 1; month <= 12; month++) {
        let option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        monthSelect.appendChild(option);
    }
}

// Update image based on selected year and month
function updateImage() {
    const selectedYear = yearSelect.value;
    let selectedMonth = monthSelect.value;

    // Add leading zero to month if needed
    
    selectedMonth = '.' + selectedMonth;
    
    

    const imageUrl = `${selectedYear}${selectedMonth}.png`;
    imageElement.src = imageUrl;
    imageElement.alt = `Subway Usage ${selectedYear}-${selectedMonth}`;
}

// Update month range slider and sync with month dropdown
function updateMonthRange() {
    const selectedMonth = monthRange.value;
    monthSelect.value = selectedMonth;
    updateImage();
}

// Initialize dropdowns and set initial image
populateDropdowns();
yearSelect.value = 2023; // Set default year
monthSelect.value = 1;   // Set default month
updateImage();

// Sync slider with dropdown
monthRange.addEventListener('input', () => {
    const selectedMonth = monthRange.value;
    monthSelect.value = selectedMonth;
    updateImage();
});
