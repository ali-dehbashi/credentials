fetch("credentials.json")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("credentials");

    data.forEach(item => {

      container.innerHTML += `
        <div class="card">

            <img src="${item.logo}" alt="${item.issuer}">

            <h2>${item.title}</h2>

            <p><strong>Issuer:</strong> ${item.issuer}</p>

            <p><strong>Issued:</strong> ${item.issued}</p>

            <a class="button" href="${item.pdf}" target="_blank">
                View Certificate
            </a>

        </div>
      `;

    });

  });
