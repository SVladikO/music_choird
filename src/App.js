import ChordsPage from './page/chords/chords.page';
import NotePage from './page/Notes/Note.page';

import Header from './components/header/header';
import DonateInfo from "./components/donate-info/donate-info";

import './App.css';

function App() {
    return (
        <>
            <Header/>
            <NotePage/>
            <DonateInfo />
        </>
    )
}

export default App;
