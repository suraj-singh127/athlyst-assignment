import React from "react";
import './TeamDetails.scss';

const TeamDetails = (props) => {
    return (
        <div>
            <h1>Enter the Team Details - </h1>
                <label>
                    Team Name:
                    <input type="text" value={props.teamName} onChange={props.handleChange} />
                </label>
                <label>
                    Pick your favorite flavor:
                    <select value={props.teamPlace} onChange={props.handlePlaceChange}>
                        <option value="Home">Home</option>
                        <option value="Away">Away</option>
                    </select>
                </label>
        </div>
    );
}

export default TeamDetails;