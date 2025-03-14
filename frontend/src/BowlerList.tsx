// Import the CSS file for styling
import './App.css';

// Import Bowler object
import {bowler} from "./types/bowler";
import {useEffect, useState} from "react";

// Component to loop through the teams array and render a Team component for each team
function BowlerList() {

    // State to store the list of bowlers
    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        // Function to fetch bowler data from the API
        const fetchBowlers = async () => {
            try {
                const response = await fetch('https://localhost:5000/BowlingCotroller');
                const data = await response.json();

                // Filter bowlers to only include those on the "Marlins" or "Sharks" teams
                const filteredBowlers = data.filter((b: bowler) => 
                    b.team.teamName === 'Marlins' || b.team.teamName === 'Sharks'
                );

                // Update the state with the filtered list of bowlers
                setBowlers(filteredBowlers);
            } catch (error) {
                console.error('Error fetching bowlers:', error);
            }
        };

        // Fetch the data when the component loads
        fetchBowlers();
    }, []); // Empty dependency array means this only runs once, on component mount

    // Render the filtered list of bowlers
    return (
        <div className="bowler-list">
            {bowlers.map((b, index) => (
                <div key={index} className="bowler-card">
                    {/* Display the bowler's full name */}
                    <h2 className="bowler-name">
                        {b.bowlerFirstName} {b.bowlerMiddleInit && b.bowlerMiddleInit + '.'} {b.bowlerLastName}
                    </h2>

                    {/* Display the bowler's address */}
                    <p className="bowler-contact">
                        📍 {b.bowlerAddress}, {b.bowlerCity}, {b.bowlerState} {b.bowlerZip}
                    </p>

                    {/* Display the bowler's phone number */}
                    <p className="bowler-phone">📞 {b.bowlerPhoneNumber}</p>

                    {/* Display the bowler's team name */}
                    <p className="bowler-team">
                        🏆 Team: <strong>{b.team.teamName}</strong>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default BowlerList;