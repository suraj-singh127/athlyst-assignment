import React from "react";
import './MatchDetails.scss';
import TimePicker from "react-time-picker";

const MatchDetails = (props) => {
    return (
        <div>
            <div>
                <p>Enter start time - </p>
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
                />
            </div>
            <div>
                <p>Enter End time - </p>
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
                />
            </div>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>
                        Location:
                        <input type="text" value={props.location} onChange={props.handleLocationChange} />
                    </label>
                    <label>
                        Comments:
                        <textarea value={props.comment} onChange={props.handleCommentChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default MatchDetails;