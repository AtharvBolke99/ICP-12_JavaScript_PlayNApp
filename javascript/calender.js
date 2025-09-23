document.addEventListener('DOMContentLoaded', () => {
    const monthYearElement = document.getElementById('month-year');
    const dayGridElement = document.getElementById('day-grid');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentDate = new Date();

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const today = new Date();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

        const monthName = currentDate.toLocaleString('default', { month: 'long' });
        monthYearElement.textContent = `${monthName} ${year}`;

        let days = '';

        for (let i = 0; i < firstDayOfMonth; i++) {
            days += `<div class="day"></div>`;
        }

        for (let i = 1; i <= lastDayOfMonth; i++) {
            let classes = 'day current-month';
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                classes += ' today';
            }
            days += `<div class="${classes}">${i}</div>`;
        }

        dayGridElement.innerHTML = days;
    };

    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});