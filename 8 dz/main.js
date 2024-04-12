
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {

  document.getElementById('loader').style.display = 'none';

  const userData = document.getElementById('userData');
  data.forEach(user => {

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.address.city}</td>
      <td>${user.website}</td>;`
    userData.appendChild(row);
  });
})
.catch(error => console.error('Error fetching data:', error));