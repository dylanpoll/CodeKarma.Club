import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./webpages/Home";
import { NoMatch } from "./webpages/NoMatch"; //404 page
import { Layout, Table } from "./components/styleComponets/Layout"; //this keeps everything center
import { NavigationBar } from "./components/styleComponets/NavigationBar";
import { Jumbotron } from "./components/styleComponets/Jumbotron";
import {Profile} from "./components/Profile";
import testProfile from "./components/testProfile";
import { quests } from "./webpages/QuestBoard";
import { Discord } from "./webpages/Discord";
import { User } from "./components/Users";
//"start": "PORT=3006 react-scripts start" for linux


function App() {
    return (
      <div className="d-flex flex-column h-100">
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Table>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/testprofile" component={testProfile} />
                <Route exact path="/quests" component={quests} />
                <Route exact path="/discord" component={Discord} />
                <Route exact path="/users" component={User} />
                <Route component={NoMatch} />
              </Switch>
            </Table>
          </Layout>
        </Router>
      </div>
    );
}

export default App;
