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
    SELECTED: 'SELECTED',
}

function App() {
    const [selectedTab, setSelectedTab] = useState(INSTRUMENT_TYPE.GUITAR);
    const [selectedSubTab, setSelectedSubTab] = useState(INSTRUMENT_TYPE.GUITAR);
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

    const renderTabs = () => {
        return (
            <div className="Tabs">
                <button onClick={() => setSelectedTab(INSTRUMENT_TYPE.GUITAR)}>Guitar</button>
                <button onClick={() => setSelectedTab(INSTRUMENT_TYPE.UKULELE)}>Ukulele</button>
                <button onClick={() => setSelectedTab(INSTRUMENT_TYPE.PIANO)}>Piano</button>
                <button
                    onClick={() => setSelectedTab(INSTRUMENT_TYPE.SELECTED)}>SELECTED {selectedChords.length}</button>
            </div>
        )
    }

    const renderSubTabs = () => {
        return (
            <div className="Tabs Tabs-in">
                <button onClick={() => setSelectedSubTab(INSTRUMENT_TYPE.GUITAR)}>Guitar</button>
                <button onClick={() => setSelectedSubTab(INSTRUMENT_TYPE.UKULELE)}>Ukulele</button>
                <button onClick={() => setSelectedSubTab(INSTRUMENT_TYPE.PIANO)}>Piano</button>
            </div>
        )
    }
    // const renderSubTabContent = () => {
    //     switch (selectedTab) {
    //         case INSTRUMENT_TYPE.GUITAR:
    //         case INSTRUMENT_TYPE.UKULELE:
    //         case INSTRUMENT_TYPE.PIANO:
    //         {selectedSubTab == INSTRUMENT_TYPE.GUITAR && <div>GUITAR</div>}
    //     {selectedSubTab == INSTRUMENT_TYPE.UKULELE && <div>UKULELE</div>}
    //     {selectedSubTab == INSTRUMENT_TYPE.PIANO && <div>PIANO</div>}
    // }
    const renderTabContent = () => {
        switch (selectedTab) {
            case INSTRUMENT_TYPE.GUITAR:
                return guitarData.map(g => renderChords(g, {showString6: true, showString5: true}));

            case INSTRUMENT_TYPE.UKULELE:
                return ukuleleData.map(g => renderChords(g));

            case INSTRUMENT_TYPE.PIANO:
                return <div>PIANO</div>;

            case INSTRUMENT_TYPE.SELECTED:
                return (
                    <div>
                        <p className='center-content'>SELECTED CHORDS:</p>
                        {renderSubTabs()}

                    </div>
                )
        }
    }

    return (
        <>
            <p>Click on chords which you need and find them in selected tab.</p>
            <input placeholder={"Enter chord"}/>
            {renderTabs()}
            <div>{selectedChords.map(c => <span>{c}</span>)}</div>
            {renderTabContent()}
        </>
    )
}

export default App;
