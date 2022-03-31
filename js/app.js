const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddWebsite(e) {
  e.preventDefault();
  const naziv = document.getElementById("naziv").value;
  const semestar = document.getElementById("semestar").value;
  const ects = document.getElementById("ects").value;

  tbodyEl.innerHTML += `
      <tr>
          <td>${naziv}</td>
          <td>${semestar}</td>
          <td>${ects}</td>
          <td><button type="button" class="deleteBtn"><i class="fas fa-trash"></i></button></td>
          <td><input type="checkbox" class="promjeniBoju">
      </tr>
  `;
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}
function onChangeRow(e) {
  if (!e.target.classList.contains("promjeniBoju")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").style.color = "red";
}

formEl.addEventListener("submit", onAddWebsite);
tableEl.addEventListener("click", onDeleteRow);
tableEl.addEventListener("click", onChangeRow);