import logo from './logo.svg';
import './App.css';
import GuitarChord from './components/guitar-chord/guitar-chord';
import UkeleleChord from './components/ukulele-chord/ukulele-chord';

import guitarData from './data/guitar';

console.log({guitarData})

function App() {

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
            {guitarData.map(g => renderChords(g))}
            <div className="App">
                <UkeleleChord name={"Am"}/>
                <UkeleleChord name={"Am"}/>
                <UkeleleChord name={"Am"}/>
                <UkeleleChord name={"Am"}/>
                <UkeleleChord name={"Am"}/>
                <UkeleleChord name={"Am"}/>
            </div>
        </>

    )
        ;
}

export default App;
