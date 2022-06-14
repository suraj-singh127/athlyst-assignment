import React from "react";

const TeamCard = (props) => {

    return (
        <div>
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