import React from "react";
import './MatchDetails.scss';
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";

const MatchDetails = (props) => {
    return (
        <div className="matchDetails">
            <div className="wrapperDiv">
                <div className="timeDetails">
                    <div className="timePicker" id="timePicker1">
                        <p>Enter start time</p>
                        <TimePicker
                            amPmAriaLabel="Select AM/PM"
                            clearAriaLabel="Clear value"
                            clockAriaLabel="Toggle clock"
                            hourAriaLabel="Hour"
                            maxDetail="second"
                            minuteAriaLabel="Minute"
                            nativeInputAriaLabel="Time"
                            onChange={props.setStartTime}
                            secondAriaLabel="Second"
                            value={props.startTime}
                            className="timePicker"
                        />
                        <DatePicker onChange={props.setDate} value={props.date} />
                    </div>
                    <div className="timePicker">
                        <p>Enter End time</p>
                        <TimePicker
                            amPmAriaLabel="Select AM/PM"
                            clearAriaLabel="Clear value"
                            clockAriaLabel="Toggle clock"
                            hourAriaLabel="Hour"
                            maxDetail="second"
                            minuteAriaLabel="Minute"
                            nativeInputAriaLabel="Time"
                            onChange={props.setEndTime}
                            secondAriaLabel="Second"
                            value={props.endTime}
                            className="timePicker"
                        />
                        <DatePicker onChange={props.setDate} value={props.date} />
                    </div>
                </div>
                <div className="formDiv">
                    <form onSubmit={props.handleSubmit} className="form">
                        <label>
                            Location:
                            <input type="text" value={props.location} onChange={props.handleLocationChange} className="locationInput"/>
                        </label>
                        {props.matchType === 'Tournament' &&
                            <label>
                                Tournament Name:
                                <input type="text" value={props.tournament} onChange={props.handleTournamentChange} style={{ width: "70%",
                    fontSize: "1.6rem",
                    backgroundColor: "transparent",
                    outlineColor: "transparent",
                    border: "transparent",
                    borderBottom: "2px solid black",
                    margin: "1rem" }}/>
                            </label>
                        }
                        <label>
                            Comments:
                            <textarea value={props.comment} onChange={props.handleCommentChange} className="comments"/>
                        </label>
                        <div className="buttons">
                            <input type="submit" value="Submit" className="submitButton"/>
                            <button className="submitButton" onClick={props.previousStep}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MatchDetails;