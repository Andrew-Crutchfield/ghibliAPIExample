import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/theme.css'; 
import FilmPage from './pages/FilmPage';
import FilmDetailPage from './pages/FilmDetailPage';
import PeoplePage from './pages/PeoplePage';
import PeopleDetailPage from './pages/PeopleDetailPage'; 
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className='container mt-5'>
                <section className='row justify-content-center'>
                    <Routes>
                        {/* Route for the root URL to render the HomePage */}
                        <Route path="/" element={<HomePage />} />

                        {/* Routes for other pages */}
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/films" element={<FilmPage />} />
                        <Route path="/films/:filmid" element={<FilmDetailPage />} />
                        <Route path="/people" element={<PeoplePage />} />
                        <Route path="/people/:personid" element={<PeopleDetailPage />} /> 
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;
