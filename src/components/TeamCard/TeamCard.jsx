import React from "react";
import './TeamCard.scss'

const TeamCard = (props) => {

    return (
        <div className="teamCard">
            <h1>
                {props.teamName}
            </h1>
            <p>
                {props.teamPlace}
            </p>
        </div>
    );
}

export default TeamCard;