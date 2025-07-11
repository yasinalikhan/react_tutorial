// src/App.tsx
import './App.css';

function App() {
  // --- Object Destructuring Example ---
  const user = {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 30,
    email: 'alice.smith@example.com',
    address: {
      street: '123 React Lane',
      city: 'Componentville',
      zip: '98765'
    }
  };

  // Object destructuring to extract firstName, lastName, and email
  const { firstName, lastName, email, address } = user;

  // Nested object destructuring to extract city and zip from the 'address' object
  const { city, zip } = address;

  // --- Array Destructuring Example ---
  const scores = [100, 95, 88, 72, 65];

  // Array destructuring to get the first two scores, and the rest into a new array
  const [topScore, secondScore, ...remainingScores] = scores;

  return (
    <>
      <h2>Destructuring Practice</h2>

      <h3>User Details (Object Destructuring)</h3>
      <div>
        <p>Hello, {firstName} {lastName}!</p>
        <p>Email: {email}</p>
        <p>Lives in: {city}, {zip}</p>
      </div>

      <hr /> {/* Horizontal rule for separation */}

      <h3>Scores (Array Destructuring)</h3>
      <div>
        <p>Original Scores: {scores.join(', ')}</p>
        <p>Top Score: {topScore}</p>
        <p>Second Score: {secondScore}</p>
        <p>Other Scores: {remainingScores.join(', ')}</p>
      </div>
    </>
  );
}

export default App;