document.addEventListener("DOMContentLoaded", function() {
  const tableBody = document.querySelector("#todo-table tbody");

  function addTaskRow(taskName) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${taskName}</td>
      <td><input type="checkbox" class="morning"></td>
      <td><input type="checkbox" class="afternoon"></td>
      <td><input type="checkbox" class="evening"></td>
    `;
    tableBody.appendChild(newRow);
  }

  // Example tasks
  addTaskRow("Task 1");
  addTaskRow("Task 2");
  addTaskRow("Task 3");
  // Add more tasks as needed
});
