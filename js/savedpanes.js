

function createRows() {
    const tbody = document.getElementById('Panes');
    const row = tbody.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = 'Name';
    cell2.innerHTML = 'Feb. 2018';
    cell3.innerHTML = '?';;
}
createRows();