import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashboardPage from '../screens/DashboardPage'
import EmploymentPage from '../screens/EmploymentPage'
import SkillsPage from '../screens/SkillsPage'

import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'

const AppRouter = () => (
  <BrowserRouter>
    <Head />
    <AnimatedBackground />
    <div className="header-container">
      <Header />
    </div>
    <div className="content-container">
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/history" component={EmploymentPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route component={DashboardPage} />
      </Switch>
    </div>
    <div className="footer-container">
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter
