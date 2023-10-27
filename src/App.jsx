import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FilmPage from './pages/FilmPage';
import FilmDetailPage from './pages/FilmDetailPage';
import PeoplePage from './pages/PeoplePage';
import PeopleDetailpage from './pages/PeopleDetailPage'; // Assuming you moved PeopleDetail to pages folder
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className='container mt-5'>
                <section className='row justify-content-center'>
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/films" element={<FilmPage />} />
                        <Route path="/films/:filmid" element={<FilmDetailPage />} />
                        <Route path="/people" element={<PeoplePage />} />
                        <Route path="/people/:personid" element={<PeopleDetailpage />} /> 
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;