import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute'
import Navbar from '../components/Navbar'
// import Home from '../pages/home/Home'
import Posts from '../data/Posts'
import Login from '../pages/Login'
// import Register from '../old/pages/register/Register'
// import Profile from '../old/pages/profile/Profile'


const AppRouter = () => {
    return (
        <Router>

            <Navbar />

            <div className="m-2">
                <Routes>
                    {/* Normal routes */}
                    <Route exact path="/" element={<Posts />} />
                    {/* <Route path="/posts/:postname" element={<Posts />} /> */}


                    {/* Public routes */}
                    <Route path="/login" element={<PublicRoute />}>
                        <Route path="/login" element={<Login />} />
                    </Route>
                    {/* <Route path="/register" element={<PublicRoute />}>
                        <Route path="/register" element={<Register />} />
                    </Route> */}


                    {/* Private routes */}
                    {/* <Route path="/profile" element={<PrivateRoute />}>
                        <Route path="/profile" element={<Profile />} />
                    </Route> */}

                </Routes>
            </div>

        </Router>
    )
}

export default AppRouter
