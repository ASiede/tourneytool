import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './header';
import Landing from './landing';
import ParticipantView from './participant-view';
import Host from './host'

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <header className="App-header">
                            <Header />
                        </header>

                        <Route exact path="/" component={Landing} />
                        <Route exact path="/participants" component={ParticipantView} />
                        <Route exact path="/hosts" component={Host} />
                        
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;
