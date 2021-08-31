import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LeftSideNav from "./Components/LeftSideNav/LeftSideNav";
import RightSideNav from "./Components/RightSideNav/RightSideNav";
import Main from "./Components/Home/Main/Main";
import Login from "./Components/LoginPage/Login";
import PrivateRoute from "./Components/LoginPage/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>

        <PrivateRoute exact path="/">
          <div className="App">
            <Header />
            <div className="row pt-3 w-100">
              <div className="col-3">
                <LeftSideNav />
              </div>
              <div className="col-7">
                <Main />
              </div>
              <div className="col-2">
                <RightSideNav />
              </div>
            </div>
          </div>
        </PrivateRoute>

        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/home">
          <div className="App">
            <Header />
            <div className="row pt-3 w-100">
              <div className="col-3">
                <LeftSideNav />
              </div>
              <div className="col-7">
                <Main />
              </div>
              <div className="col-2">
                <RightSideNav />
              </div>
            </div>
          </div>
        </PrivateRoute>

        <PrivateRoute  path="/userProfile">
          
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
