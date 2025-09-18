const balanceEl = document.getElementById("balance");
const descEl = document.getElementById("desc");
const amountEl = document.getElementById("amount");
const typeEl = document.getElementById("type");
const listEl = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

let balance = 0;
let transactions = [];

function updateBalance() {
  balance = transactions.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
  }, 0);
  balanceEl.textContent = `Balance: ₹${balance}`;
}

function renderTransactions() {
  listEl.innerHTML = "";
  transactions.forEach((t, index) => {
    const li = document.createElement("li");
    li.classList.add(t.type);

    li.innerHTML = `
      <span>${t.desc}</span>
      <span>₹${t.amount}</span>
      <button class="delete-btn" onclick="deleteTransaction(${index})">×</button>
    `;
    listEl.appendChild(li);
  });
}

function addTransaction() {
  const desc = descEl.value.trim();
  const amount = +amountEl.value.trim();
  const type = typeEl.value;

  if (!desc || !amount || amount <= 0) return;

  transactions.push({ desc, amount, type });
  descEl.value = "";
  amountEl.value = "";
  updateBalance();
  renderTransactions();
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateBalance();
  renderTransactions();
}

addBtn.addEventListener("click", addTransaction);