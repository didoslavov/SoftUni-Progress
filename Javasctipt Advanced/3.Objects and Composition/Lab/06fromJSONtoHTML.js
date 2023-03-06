function fromJSONToHTMLTable(json) {
  const students = JSON.parse(json);

  const result = ['<table>'];
  result.push(addKey(students));
  students.forEach((student) => {
    result.push(addValue(student));
  });
  result.push('</table>');

  console.log(result.join('\n'));

  function addKey(arr) {
    let result = '  <tr>';

    Object.keys(arr[0]).forEach((key) => {
      result += `<th>${escapeString(key)}</th>`;
    });
    result += '</tr>';

    return result;
  }

  function addValue(obj) {
    let result = '  <tr>';
    Object.values(obj).forEach((value) => {
      result += `<td>${escapeString(value)}</td>`;
    });
    result += '</tr>';

    return result;
  }

  function escapeString(key) {
    let entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return key.toString().replace(/[&<>"']/g, (key) => entityMap[key]);
  }
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
