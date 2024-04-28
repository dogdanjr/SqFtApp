// JavaScript function to process and convert input measurements
function convertMeasurements() {
    const input = document.getElementById('measurements').value;
    const lines = input.split('\n');
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = '';

    lines.forEach((line) => {
        const dimensions = line.split('x').map(dim => parseFloat(dim.trim()));
        if (dimensions.length === 2) {
            const width = dimensions[0];
            const height = dimensions[1];
            const squareFeet = (width * 0.0833) * (height * 0.0833);
            const resultItem = document.createElement('li');
            resultItem.textContent = `${squareFeet.toFixed(3)} square feet`;
            resultsList.appendChild(resultItem);
        }
    });
}