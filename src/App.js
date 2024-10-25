import {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import GuitarChord from './components/guitar-chord/guitar-chord';
import PianoChord from './components/piano-chord/piano-chord';

import guitarData from './data/guitar';
import ukuleleData from './data/ukulele';
import pianoData from './data/piano';

console.log({guitarData})

const INSTRUMENT_TYPE = {
    GUITAR: 'GUITAR',
    UKULELE: 'UKULELE',
    PIANO: 'PIANO',
}

const guitarChordsObj = {};

guitarData.forEach(chordGroup => {
    chordGroup.chords.forEach(chord => {
        guitarChordsObj[chord.name] = {...chord};
    })
})

const ukuleleChordsObj = {};

ukuleleData.forEach(chordGroup => {
    chordGroup.chords.forEach(chord => {
        ukuleleChordsObj[chord.name] = {...chord};
    })
})

const pianoChordsObj = {};

pianoData.forEach(chordGroup => {
    chordGroup.chords.forEach(chord => {
        pianoChordsObj[chord.name] = {...chord};
    })
})

function App() {
    const [selectedTab, setSelectedTab] = useState(INSTRUMENT_TYPE.GUITAR);
    const [selectedChords, setSelectedChords] = useState([]);

    const selectChord = chord => setSelectedChords([...selectedChords, chord]);
    const deleteChord = chordIndex => setSelectedChords([...selectedChords.filter((c, i) => i !== chordIndex)]);
    const deleteAllChord = () => setSelectedChords([]);

    const renderGuitarChords = (chordGroup, externalProps = {}) => renderChords(chordGroup, GuitarChord, externalProps);
    const renderPianoChords = (chordGroup, externalProps = {}) => renderChords(chordGroup, PianoChord, externalProps);

    const renderChords = (chord, ChordComponent, externalProps = {}) => (
        <div className={`accord-groups ${externalProps.isSelected ? "accord-groups-selected" : ""}`}>
            {!externalProps.isSelected && <div className="chord-row-name">{chord.name}</div>}
            {chord.chords.map((d, index) =>
                <ChordComponent
                    key={d.name + index}
                    chord={d}
                    chordIndex={index}
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
                return guitarData.map(g => renderGuitarChords(g, {isGuitar: true}));

            case INSTRUMENT_TYPE.UKULELE:
                return ukuleleData.map(g => renderGuitarChords(g));

            case INSTRUMENT_TYPE.PIANO:
                return pianoData.map(g => renderPianoChords(g));

        }
    }

    const renderSelectedChords = () => {
        if (!selectedChords.length) {
            return;
        }

        return (
            <div className='selected-chords-wrapper'>
                {getContent()}
                <div className='delete-all-chords' onClick={deleteAllChord}>Delete all</div>
            </div>
        )

        function getContent() {
            let chords;

            switch (selectedTab) {
                case INSTRUMENT_TYPE.GUITAR:
                    chords = selectedChords.map(chordName => ({...guitarChordsObj[chordName]}))
                    return renderGuitarChords({chords}, {isGuitar: true, isSelected: true});

                case INSTRUMENT_TYPE.UKULELE:
                    chords = selectedChords.map(chordName => ({...ukuleleChordsObj[chordName]}))
                    return renderGuitarChords({chords}, {isSelected: true});

                case INSTRUMENT_TYPE.PIANO:
                    chords = selectedChords.map(chordName => ({...pianoChordsObj[chordName]}))
                    return renderPianoChords({chords}, {isSelected: true});
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
