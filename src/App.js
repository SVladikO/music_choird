import {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import GuitarChord from './components/guitar-chord/guitar-chord';
import UkeleleChord from './components/ukulele-chord/ukulele-chord';

import guitarData from './data/guitar';

console.log({guitarData})

const INSTRUMENT_TYPE = {
    GUITAR: 'GUITAR',
    UKULELE: 'UKULELE',
    PIANO: 'PIANO',
    SELECTED: 'SELECTED',
}

function App() {
    const [selectedTab, setSelectedTab] = useState(INSTRUMENT_TYPE.GUITAR);

    const renderChords = chord => (
        <div className="App">
            {/*<div className="chord-row-name">{chord.name}</div>*/}
            {chord.chords.map(d =>
                <GuitarChord key={d.name} chord={d}/>)
            }
        </div>
    );
    return (
        <>
            <p>The reason why I create this page is select chords per song. It should hepl you play new song. Click on chords which you need and play form selected tab.</p>
            <input placeholder={"Enter chord"}/>
            <div>
                <button onClick={() => setSelectedTab(INSTRUMENT_TYPE.GUITAR)}>Guitar</button>
                <button onClick={() => setSelectedTab(INSTRUMENT_TYPE.UKULELE)}>Ukulele</button>
                <button onClick={() => setSelectedTab(INSTRUMENT_TYPE.PIANO)}>Piano</button>
                <button onClick={() => setSelectedTab(INSTRUMENT_TYPE.SELECTED)}>SELECTED</button>
            </div>


            {selectedTab == INSTRUMENT_TYPE.GUITAR && guitarData.map(g => renderChords(g))}
            {selectedTab == INSTRUMENT_TYPE.UKULELE && <div className="App">
                <UkeleleChord name={"Am"}/>
                <UkeleleChord name={"Am"}/>
                <UkeleleChord name={"Am"}/>
                <UkeleleChord name={"Am"}/>
                <UkeleleChord name={"Am"}/>
                <UkeleleChord name={"Am"}/>
            </div>
            }

            {
                selectedTab == INSTRUMENT_TYPE.SELECTED && <p>Chords per songs which you will play.</p>
            }
        </>

    )
        ;
}

export default App;
