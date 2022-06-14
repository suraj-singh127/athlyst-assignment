import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import './MatchInfo.scss';

const MatchInfo = (props) => {
    return (
        <div>
            <h1>Details - </h1>
            <div>
                Match - Type = {props.matchType}
            </div>
            <div>
                <TeamCard teamName={props.teamName1} teamPlace={props.teamPlace1} />
            </div>
            <div>
                <TeamCard teamName={props.teamName2} teamPlace={props.teamPlace2} />
            </div>
            <div>
                Start Time = {props.startTime}
                End Time = {props.endTime}
            </div>
            <div>
                Venue = {props.location}
            </div>
            <div>
                Comments = {props.comments}
            </div>
        </div>
    );
}

export default MatchInfo;