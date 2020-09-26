import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import Story from './components/Story';
import RegisterStudent from './components/RegisterStudent';
import StudentDetails from './components/StudentDetails';
import LearningHooks from './components/Learninghooks';

export default function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/story">Story</Link>
                    </li>
                    <li>
                        <Link to="/register-student">Register Student</Link>
                    </li>
                    <li>
                        <Link to="/learning-hooks">Learning Hooks</Link>
                    </li>
                    
                </ul>
            </nav>

            <Switch>
                <Route path="/about/:rollnumber">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>

                <Route path="/story">
                    <Story />
                </Route>

                <Route path="/register-student">
                    <RegisterStudent />
                </Route>

                <Route path="/student-details/:studentName/:physicsMarks/:mathsMarks">
                    <StudentDetails />
                </Route>

                <Route path="/learning-hooks">
                    <LearningHooks />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router >
    )
}