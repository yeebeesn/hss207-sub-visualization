// script.js
document.addEventListener('DOMContentLoaded', () => {
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const mapImage = document.getElementById('map');

    // 연도와 월 옵션을 동적으로 생성
    for (let year = 2012; year <= 2023; year++) {
        if (year !== 2017) { // 2017년 제외
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }
    }

    for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option');
        option.value = month.toString();
        option.textContent = month;
        monthSelect.appendChild(option);
    }

    // 이미지 업데이트 함수
    const updateImage = () => {
        const year = yearSelect.value;
        const month = monthSelect.value; // '07', '08' 등
        const imagePath = `${year}.${month}.png`;
        mapImage.src = imagePath;
    };

    // 이벤트 리스너 추가
    yearSelect.addEventListener('change', updateImage);
    monthSelect.addEventListener('change', updateImage);

    // 초기값 설정
    yearSelect.value = '2023';
    monthSelect.value = '12';
    updateImage();
});
