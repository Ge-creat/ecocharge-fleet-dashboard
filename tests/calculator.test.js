// Import function manually if needed (for browser testing ensure script.js is loaded)

// Mock function (copy of original for isolation testing)
function calculateCost(hours) {
  if (typeof hours !== "number" || isNaN(hours) || hours <= 0) {
    return null;
  }
  return hours * 7.5 * 0.15;
}

// =========================
// Unit Tests
// =========================
function runTests() {

  // Positive input
  console.assert(
    calculateCost(2) === 2.25,
    "❌ Failed: Positive input test"
  );

  // Decimal input
  console.assert(
    calculateCost(1.5) === 1.6875,
    "❌ Failed: Decimal input test"
  );

  // Negative input
  console.assert(
    calculateCost(-1) === null,
    "❌ Failed: Negative input test"
  );

  // Non-numeric input
  console.assert(
    calculateCost("abc") === null,
    "❌ Failed: Non-numeric input test"
  );

  // Zero input
  console.assert(
    calculateCost(0) === null,
    "❌ Failed: Zero input test"
  );

  console.log("✅ All tests passed!");
}

runTests();