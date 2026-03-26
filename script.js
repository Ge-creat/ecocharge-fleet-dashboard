// =========================
// Fleet Data (7 Vehicles)
// =========================
const fleet = [
  { id: "EV001", model: "Tesla Model 3", battery: 85, status: "Available" },
  { id: "EV002", model: "Nissan Leaf", battery: 60, status: "Charging" },
  { id: "EV003", model: "Hyundai Kona Electric", battery: 40, status: "On Trip" },
  { id: "EV004", model: "Chevy Bolt", battery: 75, status: "Available" },
  { id: "EV005", model: "BMW i3", battery: 30, status: "Charging" },
  { id: "EV006", model: "Ford Mustang Mach-E", battery: 90, status: "Available" },
  { id: "EV007", model: "Volkswagen ID.4", battery: 55, status: "On Trip" }
];

// =========================
// Render Fleet Table
// =========================
function renderFleet() {
  const table = document.getElementById("fleetTable");
  table.innerHTML = "";

  fleet.forEach(vehicle => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${vehicle.id}</td>
      <td>${vehicle.model}</td>
      <td>${vehicle.battery}%</td>
      <td>${vehicle.status}</td>
    `;

    table.appendChild(row);
  });
}

// =========================
// Populate Dropdown
// =========================
function populateVehicles() {
  const select = document.getElementById("vehicleSelect");
  select.innerHTML = "";

  fleet.forEach(vehicle => {
    const option = document.createElement("option");
    option.value = vehicle.id;
    option.textContent = `${vehicle.id} - ${vehicle.model}`;
    select.appendChild(option);
  });
}

// =========================
// Cost Calculation Logic
// =========================
function calculateCost(hours) {
  if (typeof hours !== "number" || isNaN(hours) || hours <= 0) {
    return null;
  }
  return hours * 7.5 * 0.15;
}

// =========================
// Handle UI Calculation
// =========================
function handleCalculation() {
  const hoursInput = document.getElementById("hoursInput").value;
  const hours = parseFloat(hoursInput);
  const resultElement = document.getElementById("result");

  const cost = calculateCost(hours);

  if (cost === null) {
    resultElement.textContent = "Please enter a valid positive number.";
    resultElement.style.color = "red";
  } else {
    resultElement.textContent = `Estimated Cost: $${cost.toFixed(2)}`;
    resultElement.style.color = "green";
  }
}

// =========================
// Initialize App
// =========================
document.getElementById("calculateBtn").addEventListener("click", handleCalculation);

renderFleet();
populateVehicles();

/*
CODE REVIEW NOTE (Deliverable 3):
Potential bug identified: Negative or non-numeric inputs could break cost calculations.
Solution: Added strict validation in calculateCost() to return null and prevent incorrect outputs.
*/