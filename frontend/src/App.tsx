// Import the CSS file for styling
import './App.css';
import BowlerList from './BowlerList';

// Component to display the welcome message and app description
function Welcome() {
  return (
    <div className="container">
      <h1>Bowler List</h1>
      <h2>
      Discover a comprehensive list of bowlers and their teams, including each bowler’s name, contact information, and team affiliation. 
      <br/>Explore the lineup, learn about the teams, and get a clear view of the players and their connections.
      </h2>
    </div>
  );
}

// Main App component that combines the Welcome and TeamList components
function App() {
  return (
    <>
      <Welcome />
      <BowlerList />
    </>
  );
}

// Export the App component so it can be rendered in index.js
export default App;