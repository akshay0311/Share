import React from "react";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import {Home,Notifications,Contacts,About} from "./views";
function App() {
  const [path,setPath] = React.useState();
  function changePath(pathname) {
    setPath(pathname)
    console.log(path)
  }
  return (
    <Router>
      <Switch>
        <div className="App">
          <NavBar path={path}/>
          <br/>
          <Route exact path="/" render={()=>(<Home pathName="/home" changePath={changePath}/>)}/>
          <Route path="/notifications" render={()=>(<Notifications pathName="/notifications" changePath={changePath}/>)}/>
          <Route path="/contacts" render= {() => <Contacts pathName="/contacts" changePath={changePath}/>}/>
          <Route path="/about">
            <About pathName="/about" changePath={changePath}/>
          </Route>
        </div>
      </Switch>
    </Router>  
  );
}

export default App;
