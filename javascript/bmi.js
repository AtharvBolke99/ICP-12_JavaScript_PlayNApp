function calcBMI() {
            const hcm = parseFloat(document.getElementById('height').value);
            const w = parseFloat(document.getElementById('weight').value);
            if (!hcm || !w) { alert('Please enter height and weight'); return; }
            const m = hcm / 100;
            const bmi = w / (m * m);
            const rounded = Math.round(bmi * 10) / 10;
            document.getElementById('bmi-value').textContent = rounded;
            let cat = '';
            if (rounded < 18.5) cat = 'Underweight';
            else if (rounded < 25) cat = 'Normal weight';
            else if (rounded < 30) cat = 'Overweight';
            else cat = 'Obesity';
            document.getElementById('bmi-cat').textContent = cat;
        }
        function clearBMI() { document.getElementById('height').value = ''; document.getElementById('weight').value = ''; document.getElementById('bmi-value').textContent = '—'; document.getElementById('bmi-cat').textContent = '—'; }
