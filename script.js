var rIndex,
        table = document.getElementById('table')

      function checkEmptyInput() {
        var isEmpty = false,
          vardas = document.getElementById('vardas').value,
          pavardė = document.getElementById('pavardė').value,
          amžius = document.getElementById('amžius').value

        if (vardas = '') {
          alert('Įveskite duomenis')
          isEmpty = true
        } else if (pavardė = '') {
          alert('Įveskite duomenis')
          isEmpty = true
        } else if (amžius <=0) {
          alert('Įveskite duomenis')
          isEmpty = true
        }
        return isEmpty
      }

      function addHtmlTableRow() {

        if (!checkEmptyInput()) {
          var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            vardas = document.getElementById('vardas').value,
            pavardė = document.getElementById('pavardė').value,
            amžius = document.getElementById('amžius').value

          cell1.innerHTML = vardas
          cell2.innerHTML = pavardė
          cell3.innerHTML = amžius
      
        }
      }
      function selectedRowToInput() {
        for (var i = 1; i < table.rows.length; i++) {
          table.rows[i].onclick = function () {
            rIndex = this.rowIndex
            document.getElementById('vardas').value = this.cells[0].innerHTML
            document.getElementById('pavardė').value = this.cells[1].innerHTML
            document.getElementById('amžius').value = this.cells[2].innerHTML
          }
        }
      }
    
    function removeFirstRow(){
      if (table.rows.length) 
      {  table.deleteRow(1) }
    else
      { alert('Nebėra ką trinti') }}

    function removeLastRow(){
      if (table.rows.length) 
      { table.deleteRow(table.rows.length -1) }
    else
      { alert('Nebėra ką trinti') }}