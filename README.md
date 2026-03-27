# EcoCharge Fleet Dashboard

## Project Overview
A simple web-based dashboard for monitoring electric vehicles and calculating charging costs.

---

## Features
- Fleet overview displaying 7 EVs
- Charging cost calculator
- Input validation

### 1. Fleet Overview
- Displays 7 electric vehicles
- Shows:
  - Vehicle ID
  - Model
  - Battery Percentage
  - Status

### 2. Charging Cost Calculator
- Select a vehicle
- Enter charging duration (hours)
- Calculates cost using:
  Cost = Hours × 7.5 × 0.15

---

## How to Run

1. Download or clone the repository
2. Open `index.html` in your browser
3. No installation required

---

## Running Tests

1. Open `tests/calculator.test.js` in browser console or link it in HTML
2. Check console for results

---

## Team Workflow

- Feature branches used:
  - feature/fleet-overview
  - feature/cost-calculator
- Changes merged via Merge Requests

---

## Code Review Note

Potential bug:
- Invalid inputs (negative or non-numeric values) could break calculations.

Solution:
- Input validation added in `calculateCost()` to ensure safe execution.

---

## Demo

Include a 5-minute screen recording demonstrating:
- Fleet display
- Cost calculator
- GitLab repository workflow
