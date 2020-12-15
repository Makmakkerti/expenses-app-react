import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact />
        <Route path='/create' component={AddExpensePage} exact />
        <Route path='/edit' component={EditExpensePage} exact />
        <Route path='/help' component={HelpPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
