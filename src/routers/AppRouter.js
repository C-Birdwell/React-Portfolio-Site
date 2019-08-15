import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import DashboardPage from "../screens/DashboardPage";
import SummaryPage from "../screens/SummaryPage";
import EmploymentPage from "../screens/EmploymentPage"

import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import AnimatedBackground from "../components/AnimatedBackground";


const AppRouter = () => (
  <BrowserRouter>
     <AnimatedBackground /> 
      <div className="header-container">
        <Header />
      </div>
      <div style={{flex: 2}} />
      <div className="content-container">
            <Switch>
              <Route path="/" component={DashboardPage} exact={true} />
              <Route path="/summary" component={SummaryPage} />
              <Route path="/history" component={EmploymentPage} />
              <Route path="/create" component={AddExpensePage} />
              <Route path="/edit/:id" component={EditExpensePage} />
              <Route path="/help" component={HelpPage} />
              <Route component={NotFoundPage} />
            </Switch>
      </div>
  </BrowserRouter>
);

export default AppRouter;
