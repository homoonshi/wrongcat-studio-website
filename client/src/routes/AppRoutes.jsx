import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import Profile from '../pages/user/Profile';
import About from '../pages/about/About';
import Games from '../pages/games/Games';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} /> {/* Register가 아니라 Profile이어야 합니다 */}
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />} />
        </Routes>
    );
};

export default AppRoutes;
