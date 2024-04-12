const table = document.querySelector("table")
const addBtn = document.querySelector(".addBtn");
const tbody = document.querySelector("tbody");
let allow = true;

const orderRow = () => {
  const rows = [...document.querySelectorAll("tbody tr")];
  rows.map((row, key) => {
    [(row.querySelector("td").textContent = key + 1)];
  });
};

const saveData = (e) => {
  const setirler = e.target.parentElement.parentElement.rowIndex
  if (!allow) {
    const inputs = [...document.querySelectorAll("input")];
    inputs.map((input) => {
      input.parentElement.textContent = input.value;
    })
    e.target.textContent = "Düzəliş et";
    allow = true;
  } else {
    e.target.textContent = "Yadda saxla"
    let liste = ["Ad", "Soyad", "Yaş"]
    const simsar = [...document.querySelectorAll("tr")][setirler]
    for(i=1; i<4; i++) {
      const yeni = document.createElement("input");
      yeni.setAttribute("placeholder", liste[i-1]);
      yeni.value = simsar.childNodes[i].textContent
      simsar.childNodes[i].innerHTML = ""
      if(i===3) {
        yeni.setAttribute("type", "number")
      }
      else {yeni.setAttribute("type", "text") }
      simsar.childNodes[i].append (yeni)
    }
    allow =false
  }
}
addBtn.addEventListener("click", () => {
  if (!allow) {
    alert("Öncəki xananı doldurun pls...");
    return;
  }

  const sil = (dlt) => {
    const setirler = dlt.target.parentElement.parentElement.rowIndex
    table.deleteRow(setirler)
    orderRow()
  }

  allow = false;
  const row = document.createElement("tr");
  const noTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Ad");
  nameTd.append(nameInput);
  const surnameTd = document.createElement("td");
  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("placeholder", "Soyad");
  surnameTd.append(surnameInput);
  const ageTd = document.createElement("td");
  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("placeholder", "Yaş");
  ageTd.append(ageInput);
  const optionsTd = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Yadda saxla";
  saveBtn.classList.add("saveBtn");
  saveBtn.addEventListener("click", saveData);
  const cancelBtn = document.createElement("button");
  cancelBtn.addEventListener("click", sil);
  cancelBtn.textContent = "Sil";
  cancelBtn.classList.add("cancelBtn");
  optionsTd.append(saveBtn, cancelBtn);
  row.append(noTd, nameTd, surnameTd, ageTd, optionsTd);
  tbody.append(row);
  orderRow();
});
