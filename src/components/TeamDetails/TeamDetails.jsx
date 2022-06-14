import React from "react";
import './TeamDetails.scss';

const TeamDetails = (props) => {
    return (
        <div className="teamDetails">
            <div className="wrapperDiv">
                <h1>Enter the Team Details - </h1>
                <label className="label">
                    Team Name:
                    <input type="text" value={props.teamName} onChange={props.handleChange} className="inputTeam"/>
                </label>
                <label className="label">
                    <select value={props.teamPlace} onChange={props.handlePlaceChange} className="selector">
                        <option value="Home">Home</option>
                        <option value="Away">Away</option>
                    </select>
                </label>
            </div>
        </div>
    );
}

export default TeamDetails;