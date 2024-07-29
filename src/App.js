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

    const renderChords = (chord, externalProps = {}) => (
        <div className="App">
            <div className="chord-row-name">{chord.name}</div>
            {chord.chords.map(d =>
                <GuitarChord
                    key={d.name}
                    chord={d}
                    onChordSelect={selectChord}
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
        let chords;

        switch (selectedTab) {
            case INSTRUMENT_TYPE.GUITAR:
                chords = selectedChords.map(chordName => ({name: chordName, notes: guitarChordsObj[chordName]}))
                return renderChords({chords}, {showString6: true, showString5: true});

            case INSTRUMENT_TYPE.UKULELE:
                chords = selectedChords.map(chordName => ({name: chordName, notes: ukuleleChordsObj[chordName]}))
                return renderChords({chords});
            case INSTRUMENT_TYPE.PIANO:
                return <div>empty</div>
        }
    }

    return (
        <>
            <p>Click on chords which you need and find them in selected tab.</p>
            <input placeholder={"Enter chord"}/>
            {renderTabs()}
            {renderSelectedChords()}
            <div>{selectedChords.map(c => <span>{c}</span>)}</div>
            {renderTabContent()}
        </>
    )
}

export default App;
