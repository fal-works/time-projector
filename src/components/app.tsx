import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import NotFoundPage from "../routes/notfound";
import Header from "./header";

const App: FunctionalComponent = () => {
  const handleRoute = (e: RouterOnChangeArgs) => {
    e;
  };

  return (
    <div id="app">
      <Header />
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} query="0" />
        <Route path="/:query" component={Home} />
        <Route path="/index.html" component={Home} query="0" />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
