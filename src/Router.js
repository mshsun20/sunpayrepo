import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Registration from './components/Registration'
import Login from './components/Login'

const Router = () => {
    return (
        <>
        <Navbar />
        <div className="apbdy">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />
                <Redirect to="/" />
            </Switch>
        </div>
        <Footer />
        </>
    )
}

export default Router
