document.addEventListener('DOMContentLoaded', function () {
    // Function to create the table rows dynamically
    function createTableRow(opportunity) {
      return `
        <tr>
          <td>${opportunity.organisation}</td>
          <td>${opportunity.title}</td>
          <td>${opportunity.lastDate}</td>
          <td><a href="${opportunity.applyLink}" target="_blank" rel="noopener noreferrer">Apply</a></td>
          <td><a href="${opportunity.notificationLink}" target="_blank" rel="noopener noreferrer">Download</a></td>
        </tr>
      `;
    }
  
    // Get the container element for the table
    const tableContainer = document.getElementById('jobsTable');
  
    // Fetch the opportunities data from the opportunities.json file
    fetch('data/jobs.json')
      .then(response => response.json())
      .then(opportunities => {
        // Create the table element
        const tableElement = document.createElement('table');
        tableElement.classList.add('opportunities-table'); // Add any CSS class for styling
  
        // Create the table header
        const tableHeader = document.createElement('thead');
        tableHeader.innerHTML = `
          <tr>
            <th>Organisation</th>
            <th>Post</th>
            <th>Last Date</th>
            <th>Apply Link</th>
            <th>Notification Link</th>
          </tr>
        `;
  
        // Create the table body
        const tableBody = document.createElement('tbody');
        opportunities.forEach(opportunity => {
          tableBody.innerHTML += createTableRow(opportunity);
        });
  
        // Append the header and body to the table
        tableElement.appendChild(tableHeader);
        tableElement.appendChild(tableBody);
  
        // Append the table to the container element
        tableContainer.appendChild(tableElement);
      })
      .catch(error => {
        console.error('Error fetching opportunities data:', error);
      });
  });
  