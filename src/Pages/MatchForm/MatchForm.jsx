import { useState } from "react";
import MatchDetails from "../../components/MatchDetails/MatchDetail";
import MatchInfo from "../../components/MatchInfo/MatchInfo";
import MatchType from '../../components/MatchType/MatchType';
import TeamDetails from "../../components/TeamDetails/TeamDetails";
import Navbar from '../../components/Navbar/Navbar'
import './MatchForm.scss';


const MatchForm = () => {
    const dateToday = new Date();

    const [step, setStep] = useState(1);
    const [matchType, setMatchType] = useState('');
    const [tournament, setTournament] = useState('');
    const [startTime, setStartTime] = useState(dateToday);
    const [endTime, setEndTime] = useState(dateToday);
    const [location, setLocation] = useState('');
    const [comments, setComment] = useState('');
    const [teamName1, setTeamName1] = useState('');
    const [teamPlace1, setTeamPlace1] = useState('Home');
    const [teamPlace2, setTeamPlace2] = useState('Away');
    const [teamName2, setTeamName2] = useState('');

    const matchList = localStorage.getItem("matchList") == null ? [] : JSON.parse(localStorage.getItem("matchList"));

    //move forward one step in the form
    const nextStep = () => {
        const stepValue = step;
        setStep(stepValue + 1);
    }

    // move back one step in the form
    const previousStep = () => {
        const stepValue = step;
        setStep(stepValue - 1);
    }

    const handleChange = (event) => {
        setMatchType(event.target.value);
    }

    const handleTournamentChange = (event) => {
        setTournament(event.target.value);
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handleTeamName1Change = (event) => {
        setTeamName1(event.target.value);
    }

    const handleTeamName2Change = (event) => {
        setTeamName2(event.target.value);
    }

    const handlePlaceChange1 = (event) => {
        setTeamPlace1(event.target.value);
    }

    const handlePlaceChange2 = (event) => {
        setTeamPlace2(event.target.value);
    }

    const handleSubmit = (event) => {
        nextStep();
        event.preventDefault();
    }
    <Navbar />
    switch (step) {
        case 1:
            return (
                <MatchType
                    onChangeHandler={handleChange}
                    onSubmitHandler={handleSubmit}
                    matchType={matchType}
                />
            );

        case 2:
            return (
                <MatchDetails
                    matchType={matchType}
                    tournament={tournament}
                    handleTournamentChange={handleTournamentChange}
                    startTime={startTime}
                    endTime={endTime}
                    setStartTime={setStartTime}
                    setEndTime={setEndTime}
                    location={location}
                    comments={comments}
                    handleLocationChange={handleLocationChange}
                    handleCommentChange={handleCommentChange}
                    handleSubmit={handleSubmit}
                    previousStep={previousStep}
                />
            );

        case 3:
            return (
                <div className="entireTeamDetails">
                    <form onSubmit={handleSubmit} className="teamForm">
                        <div className="teamDetails">
                            <TeamDetails
                                teamName={teamName1}
                                handleChange={handleTeamName1Change}
                                teamPlace={teamPlace1}
                                handlePlaceChange={handlePlaceChange1}
                            />
                            <TeamDetails
                                teamName={teamName2}
                                handleChange={handleTeamName2Change}
                                teamPlace={teamPlace2}
                                handlePlaceChange={handlePlaceChange2}
                            />
                        </div>
                        <div className="buttons">
                            <button onClick={previousStep} className="submitButton">Back</button>
                            <input type="submit" value="Submit" className="submitButton"/>
                        </div>
                    </form>
                </div>
            );

        case 4:
            return (
                <div className="matchInfo">
                    <form onSubmit={handleSubmit} className="finalForm">
                        <MatchInfo
                            matchType={matchType}
                            teamName1={teamName1}
                            teamPlace1={teamPlace1}
                            teamName2={teamName2}
                            teamPlace2={teamPlace2}
                            startTime={startTime}
                            endTime={endTime}
                            location={location}
                            comments={comments}
                        />
                        <div>
                            <button onClick={previousStep} className="submitButton">Back</button>
                            <input type="submit" value="Submit" className="submitButton"/>
                        </div>
                    </form>
                </div>
            );

        case 5:
            const match = {
                matchType: matchType,
                location: location,
                startTime: startTime,
                endTime: endTime,
                tournament: tournament,
                teamName1: teamName1,
                teamPlace1: teamName1,
                teamName2: teamName2,
                teamPlace2: teamPlace2
            }
            matchList.push(match);
            localStorage.setItem("matchList", JSON.stringify(matchList));
            return (
                <div className="entirePage">
                    <h1>Success!!</h1>
                </div>
            )

        default:
            break;
    }
}

export default MatchForm;