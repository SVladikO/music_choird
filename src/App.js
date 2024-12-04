import {BrowserRouter, Routes, Route} from "react-router";

import ChordsPage from './page/chords/chords.page';
import NotePage from './page/notes/Note.page';

import Header from './components/header';
import DonateInfo from "./components/donate-info";

import './App.css';
import {page_urls} from "./config";

function App() {
    return (
        <div>
            <Header page_urls={page_urls} />
            <BrowserRouter>
                <Routes>
                    <Route path={page_urls.home} element={<div>Home</div>}/>
                    <Route path={page_urls.chords} element={<ChordsPage/>}/>
                    <Route path={page_urls.notes} element={<NotePage/>}/>
                    <Route path={page_urls.about} element={<div>About</div>}/>
                </Routes>
            </BrowserRouter>

            <DonateInfo/>
        </div>
    )
}

export default App;
