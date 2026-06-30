// ------------data---------------
// ------------data---------------
"use strickt";
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];

const movementsContainer = document.querySelector(".movements-container");
const movements = account1.movements;

const addMovementList = function (movementsContainer, movements) {
  movementsContainer.innerHTML = "";
  movements.forEach(function (movement, i) {
    const type = movement >= 0 ? "deposit" : "withdraw";
    const html = `<div class="movement">
                  <span class="${type}">${i + 1} ${type}</span>
                  <p class="text-[17px]">${movement}€</p>
                </div>`;

    movementsContainer.insertAdjacentHTML("afterbegin", html);
  });
};
addMovementList(movementsContainer, movements);

const sumOfmovInHeader = document.querySelector(".sumOfmov");

const updateSumOfmovInHeader = function (movements) {
  const sumOfMov = movements.reduce((mov, sum) => mov + sum);
  sumOfmovInHeader.textContent = sumOfMov + "€";
};

updateSumOfmovInHeader(movements);
// --------------------------DOM-------------------------------
