import {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import GuitarChord from './components/guitar-chord/guitar-chord';
import UkeleleChord from './components/ukulele-chord/ukulele-chord';

import guitarData from './data/guitar';
import ukuleleData from './data/ukulele';

console.log({guitarData})

const INSTRUMENT_TYPE = {
    GUITAR: 'GUITAR',
    UKULELE: 'UKULELE',
    PIANO: 'PIANO',
}

const guitarChordsObj = {};

guitarData.forEach(chordGroup => {
    chordGroup.chords.forEach(chord => {
        guitarChordsObj[chord.name] = chord.notes;
    })
})

const ukuleleChordsObj = {};

ukuleleData.forEach(chordGroup => {
    chordGroup.chords.forEach(chord => {
        ukuleleChordsObj[chord.name] = chord.notes;
    })
})

function App() {
    const [selectedTab, setSelectedTab] = useState(INSTRUMENT_TYPE.GUITAR);
    const [selectedChords, setSelectedChords] = useState([]);

    const selectChord = chord => setSelectedChords([...selectedChords, chord]);
    const deleteChord = chord => setSelectedChords([...selectedChords.filter(c => c !== chord)]);

    const renderChords = (chord, externalProps = {}) => (
        <div className={`accord-groups ${externalProps.isSelected ? "accord-groups-selected" : ""}`}>
            <div className="chord-row-name">{chord.name}</div>
            {chord.chords.map(d =>
                <GuitarChord
                    key={d.name}
                    chord={d}
                    onChordSelect={selectChord}
                    onChordDelete={deleteChord}
                    {...externalProps}
                />)}
        </div>
    );

    const renderTabButton = type => {
        return (
            <button
                className={selectedTab === type ? 'selected-tab' : ''}
                onClick={() => setSelectedTab(type)}>
                {type}
            </button>
        )
    }

    const renderTabs = () => {
        return (
            <div className="Tabs">
                {renderTabButton(INSTRUMENT_TYPE.GUITAR)}
                {renderTabButton(INSTRUMENT_TYPE.UKULELE)}
                {renderTabButton(INSTRUMENT_TYPE.PIANO)}
            </div>
        )
    }

    const renderTabContent = () => {
        switch (selectedTab) {
            case INSTRUMENT_TYPE.GUITAR:
                return guitarData.map(g => renderChords(g, {showString6: true, showString5: true}));

            case INSTRUMENT_TYPE.UKULELE:
                return ukuleleData.map(g => renderChords(g));

            case INSTRUMENT_TYPE.PIANO:
                return <div>PIANO</div>;
        }
    }

    const renderSelectedChords = () => {
        if (!selectedChords.length) {
            return;
        }

        return (
            <div className='selected-chords-wrapper'>
                {getContent()}
            </div>
        )

        function getContent() {
            let chords;

            switch (selectedTab) {
                case INSTRUMENT_TYPE.GUITAR:
                    chords = selectedChords.map(chordName => ({name: chordName, notes: guitarChordsObj[chordName]}))
                    return renderChords({chords}, {showString6: true, showString5: true, isSelected: true});

                case INSTRUMENT_TYPE.UKULELE:
                    chords = selectedChords.map(chordName => ({name: chordName, notes: ukuleleChordsObj[chordName]}))
                    return renderChords({chords}, {isSelected: true});
                case INSTRUMENT_TYPE.PIANO:
                    return <div></div>
            }
        }
    }

    return (
        <>
            <p className="center-content intro">Find and select chords.</p>
            <p className="center-content">Click on chords which you need.</p>
            {renderTabs()}
            {/*<div>{selectedChords.map(c => <span>{c}</span>)}</div>*/}
            <div className="tab-content">
                {renderSelectedChords()}
                {renderTabContent()}
            </div>
        </>
    )
}

export default App;
