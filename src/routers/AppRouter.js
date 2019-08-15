import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import SummaryPage from "../screens/SummaryPage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import AnimatedBackground from "../components/AnimatedBackground";
import Fade from 'react-reveal/Fade';


const AppRouter = () => (
  <BrowserRouter>
     <AnimatedBackground /> 
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div className="content-container">
            <Switch>
              <Route path="/" component={DashboardPage} exact={true} />
              <Route path="/summary" component={SummaryPage} />
              <Route path="/create" component={AddExpensePage} />
              <Route path="/edit/:id" component={EditExpensePage} />
              <Route path="/help" component={HelpPage} />
              <Route component={NotFoundPage} />
            </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
