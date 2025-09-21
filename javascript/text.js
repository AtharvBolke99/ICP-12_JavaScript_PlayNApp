   function toUpper() { const t = document.getElementById('txt'); t.value = t.value.toUpperCase(); showTextResult('Converted to UPPER'); }
        function toLower() { const t = document.getElementById('txt'); t.value = t.value.toLowerCase(); showTextResult('Converted to lower'); }
        function reverseText() { const t = document.getElementById('txt'); t.value = t.value.split('').reverse().join(''); showTextResult('Reversed'); }
        function countWords() { const t = document.getElementById('txt'); const words = t.value.trim().split(/\s+/).filter(Boolean); showTextResult(words.length + ' word(s)'); }
        function clearText() { document.getElementById('txt').value = ''; showTextResult('Cleared'); }
        function showTextResult(s) { document.getElementById('text-result').textContent = s; }