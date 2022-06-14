import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import './MatchInfo.scss';

const MatchInfo = (props) => {
    return (
        <div className="details">
            <div>
                 {props.matchType}
            </div>
            <div className="teamCards">
                <TeamCard teamName={props.teamName1} teamPlace={props.teamPlace1} className="teamCard"/>
                <TeamCard teamName={props.teamName2} teamPlace={props.teamPlace2} className="teamCard"/>
            </div>
            <div>
                Start Time = {props.startTime}
                &nbsp;End Time = {props.endTime}
            </div>
            <div>
                Venue = {props.location}
            </div>
        </div>
    );
}

export default MatchInfo;