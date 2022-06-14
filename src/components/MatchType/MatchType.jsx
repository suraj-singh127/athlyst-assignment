import React from 'react';
import './MatchType.scss';

const MatchType = (props) => {

    return (
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <label>
                    Match Type:
                    <select value={props.matchType} onChange={props.onChangeHandler}>
                        <option value="Friendly">Friendly</option>
                        <option value="Tournament">Tournament</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default MatchType;