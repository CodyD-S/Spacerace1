Papa.parse('Space_Corrected(in).csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    console.log("running");
    console.log(results.data);
    const tbody = document.querySelector('#dataTable tbody');
 
    results.data.forEach(row => {
 
      const tr = document.createElement('tr');
 
      tr.innerHTML = `
        <td>${row.Unnamed}</td>
        <td>${row.CompanyName}</td>
        <td>${row.Location}</td>
        <td>${row.Datum}</td>
        <td>${row.Detail}</td>
        <td>${row.Status Rocket}</td>
        <td>${row.Rocket}</td>
        <td>${row.Status Mission}</td>
      `;
 
      tbody.appendChild(tr); 
    });
  },
 
  error: function(err) {
    console.error("FAILED");
    console.error(err);
  }
});
