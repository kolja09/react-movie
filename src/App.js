import React from 'react';
import './App.scss';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Header> </Header>
                <div className='container'>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/movie/:imdbID' component={MovieDetail}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default App;