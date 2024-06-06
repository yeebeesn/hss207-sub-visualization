// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    populateYearSelect();
    populateMonthSelect();
    updateImage();
});

function populateYearSelect() {
    const yearSelect = document.getElementById('yearSelect');
    for (let year = 2012; year <= 2023; year++) {
        let option = document.createElement('option');
        option.value = year;
        option.text = year;
        yearSelect.appendChild(option);
    }
}

function populateMonthSelect() {
    const monthSelect = document.getElementById('monthSelect');
    for (let month = 1; month <= 12; month++) {
        let option = document.createElement('option');
        option.value = month.toString().padStart(2, '0');
        option.text = month;
        monthSelect.appendChild(option);
    }
}

function updateImage() {
    const year = document.getElementById('yearSelect').value;
    const month = document.getElementById('monthSelect').value;
    const img = document.getElementById('subwayImage');
    img.src = `${year}${month}.png`;
}

function updateMonthRange() {
    const range = document.getElementById('monthRange').value;
    document.getElementById('monthSelect').value = range.toString().padStart(2, '0');
    updateImage();
}
