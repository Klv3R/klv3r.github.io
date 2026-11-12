const message = document.getElementById("news");

fetch("api/news.json", { cache: "no-store" })
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((data) => {
    message.textContent = data.message;
  })
  .catch((error) => {
    message.textContent = `Could not load the JSON test resource: ${error.message}`;
  });
