import React from "react";
import Table from 'react-bootstrap/Table'
import './MatchList.scss'

const MatchList = (props) => {

    const matchList = localStorage.getItem("matchList") == null ? [] : JSON.parse(localStorage.getItem("matchList"));

    return (
        <div className="matchListTable">
            <Table >
                <thead>
                    <tr>
                        <th>Team1</th>
                        <th>Team2</th>
                        <th>Match Type</th>
                        <th>Tournament Name</th>
                        <th>Start Date & Time</th>
                        <th>End Date & Time</th>
                        <th>Location</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                {matchList.map((match) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{match.teamName1}</td>
                                <td>{match.teamName2}</td>
                                <td>{match.matchType}</td>
                                <td>{match.tournament}</td>
                                <td>{match.startTime}</td>
                                <td>{match.endTime}</td>
                                <td>{match.location}</td>
                                <td>{match.comments}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
        </div>
    );
}

export default MatchList;