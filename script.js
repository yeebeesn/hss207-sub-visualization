const yearSelect = document.getElementById('yearSelect');
const monthSelect = document.getElementById('monthSelect');
const monthRange = document.getElementById('monthRange');
const imageElement = document.getElementById('subwayImage');

// Populate year dropdown
function populateYears() {
    const years = [2012, 2013, 2014, 2015, 2016, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
    years.forEach(year => {
        let option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });
}

// Populate month dropdown based on selected year
function updateMonths() {
    monthSelect.innerHTML = ''; // Clear previous options
    const selectedYear = parseInt(yearSelect.value);
    const maxMonth = (selectedYear === 2024) ? 4 : 12;
    monthRange.max = maxMonth; // Update range slider max value

    for (let month = 1; month <= maxMonth; month++) {
        let option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        monthSelect.appendChild(option);
    }

    // If currently selected month is greater than the new max month, set it to max month
    if (monthSelect.value > maxMonth) {
        monthSelect.value = maxMonth;
    }

    monthRange.value = monthSelect.value;
}

// Update image based on selected year and month
function updateImage() {
    const selectedYear = yearSelect.value;
    let selectedMonth = monthSelect.value;

    // Add leading zero to month if needed
    selectedMonth = selectedMonth.padStart(2, '0');

    const imageUrl = `${selectedYear}.${selectedMonth}.png`;
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
populateYears();
yearSelect.value = 2023; // Set default year
updateMonths();
monthSelect.value = 1;   // Set default month
updateImage();

// Sync slider with dropdown
monthRange.addEventListener('input', () => {
    const selectedMonth = monthRange.value;
    monthSelect.value = selectedMonth;
    updateImage();
});
