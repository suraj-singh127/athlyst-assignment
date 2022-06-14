import React from 'react';
import './MatchType.scss';

const MatchType = (props) => {

    return (
        <div className='matchTypeForm'>
            <form onSubmit={props.onSubmitHandler} className="form">
                <label className='labelMatchType'>
                    Match Type:
                    <select value={props.matchType} onChange={props.onChangeHandler} className="selector">
                        <option value="Friendly">Friendly</option>
                        <option value="Tournament">Tournament</option>
                    </select>
                </label>
                <input type="submit" value="Submit" className="submitButton"/>
            </form>
        </div>
    );
}

export default MatchType;