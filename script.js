//Home
function showHome() {
    fetch('home.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Hiba történt a home.txt betöltése során:', error));
}
//Sorozatok tartalma
function showSeries() {
    fetch('sorozatok.txt')
        .then(response => response.text())
        .then(data => {
            const series = data.split('\n').map(row => row.split(',')); // A sorok felosztása vessző mentén
            const table = '<table>' +
                            '<tr>' +
                                '<th>Cím</th>' +
                                '<th>Év</th>' +
                                '<th>Műfaj</th>' +
                            '</tr>' +
                            series.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join('') + // Táblázat létrehozása a sorokból
                          '</table>';
            document.getElementById('content').innerHTML = table;
        })
        .catch(error => console.error('Hiba történt a sorozatok.txt betöltése során:', error));
}


// Footer tartalom
fetch('footer.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerContent').innerHTML = data;
    })
    .catch(error => console.error('Hiba történt a footer.txt betöltése során:', error));
