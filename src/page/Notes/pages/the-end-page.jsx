import React from "react";
import TrainingHistory from "../components/training-history";

const TheEndPage = props => {
    const {
        notesToGuess,
        prepareMainPage,
    } = props;
    return (
        <>
            <h4>Result</h4>
            <div className='training-conclusion'>
                <TrainingHistory notesToGuess={notesToGuess}/>
                <div className="buttons_container">
                    <div className={'button'} onClick={prepareMainPage}>Main page</div>
                </div>
            </div>
        </>
    );
}

export default TheEndPage;