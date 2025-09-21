 let showSeconds = true;
        let use12 = false;
        const timeEl = document.getElementById('clock-time');
        const dateEl = document.getElementById('clock-date');
        document.getElementById('toggle-12-24').addEventListener('click', () => { use12 = !use12; updateClock() });
        document.getElementById('toggle-seconds').addEventListener('click', () => { showSeconds = !showSeconds; updateClock() });

        function two(n) { return n < 10 ? '0' + n : '' + n }
        function updateClock() {
            const d = new Date();
            let h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
            const day = d.toLocaleDateString();
            dateEl.textContent = day;
            let suffix = '';
            if (use12) {
                suffix = h >= 12 ? ' PM' : ' AM';
                h = h % 12 || 12;
            }
            let timeStr = two(h) + ':' + two(m) + (showSeconds ? (':' + two(s)) : '');
            timeEl.textContent = timeStr + (use12 ? suffix : '');
        }
        updateClock();
        setInterval(updateClock, 500);