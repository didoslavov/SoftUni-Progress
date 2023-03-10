function generateReport() {
  const checkBoxElements = document.querySelectorAll('table>thead>tr>th>input');
  const rowsElements = document.querySelectorAll('tbody>tr');
  const textArea = document.getElementById('output');

  const output = [];

  Array.from(rowsElements).forEach((row) => {
    const entry = {};
    const properties = Array.from(row.getElementsByTagName('td')).map(
      (e) => e.textContent
    );

    Array.from(checkBoxElements).forEach((box, i) => {
      const checkboxName = box.name;
      
      if (box.checked) {
        entry[checkboxName] = properties[i];
      }
    });

    output.push(entry);
  });

  textArea.textContent = JSON.stringify(output, null, 2);
}
