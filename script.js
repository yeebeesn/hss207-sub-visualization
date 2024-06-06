// script.js
document.addEventListener('DOMContentLoaded', () => {
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const mapImage = document.getElementById('map');
    const tooltip = document.getElementById('tooltip');

    // 연도와 월 옵션을 동적으로 생성
    for (let year = 2012; year <= 2023; year++) {
        if (year !== 2017) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }
    }

    for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option');
        option.value = month.toString().padStart(2, '0');
        option.textContent = month;
        monthSelect.appendChild(option);
    }

    // 이미지 업데이트 함수
    const updateImage = () => {
        const year = yearSelect.value;
        const month = monthSelect.value;
        const imagePath = `${year.slice(2)}${month}.png`;
        mapImage.src = imagePath;
    };

    yearSelect.addEventListener('change', updateImage);
    monthSelect.addEventListener('change', updateImage);

    stations.forEach(station => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", station.x);
        circle.setAttribute("cy", station.y);
        circle.setAttribute("r", Math.sqrt(station.ussage) / 100); // 승객 수에 따른 크기 조정
        circle.setAttribute("fill", "red");

        circle.addEventListener('mouseover', (event) => {
            tooltip.style.display = 'block';
            tooltip.style.left = event.pageX + 'px';
            tooltip.style.top = event.pageY + 'px';
            tooltip.innerHTML = `<strong>${station.name}</strong><br>Line: ${station.line}<br>Usage: ${station.ussage}`;
        });

        circle.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });

        circle.addEventListener('click', () => {
            alert(`Station: ${station.name}\nLine: ${station.line}\nUsage: ${station.ussage}`);
        });

        svg.appendChild(circle);
    });
});
