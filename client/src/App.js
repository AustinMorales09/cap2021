import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import Navbar from 'src/components/Navbar';
import Footer from "src/components/Footer";
import Home  from "src/components/Home";
import About  from "src/components/About";
import EatLocal  from "src/components/EatLocal";
import ShopLocal  from "src/components/ShopLocal";
import Attractions  from "src/components/Attractions";
import CincyHistory  from "src/components/CincyHistory";
import Contact  from "src/components/Contact";
import CreateRestaurant from "src/components/CreateRestaurant";
import CreateHistory from "src/components/CreateHistory";
import CreateShop from "src/components/CreateShop";
import CreateAttraction from "src/components/CreateAttraction";


function App() {

  return (

    <Router>
    <div className="App">
    <Navbar />
 
    <Switch>  
     <Route exact path="/" component={Home} />
     <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
     <Route path="/attraction" component={Attractions} />  
     <Route path="/shop" component={ShopLocal} />
     <Route path="/restaurant" component={EatLocal} />
     <Route path="/history" component={CincyHistory} />
     <Route exact path="/create" component={CreateRestaurant} />
     <Route path="/createRestaurant" component={CreateRestaurant} />
     <Route path="/createHistory" component={CreateHistory} />
     <Route path="/createAttraction" component={CreateAttraction} />
     <Route path="/createShop" component={CreateShop} />
 
    </Switch> 
     <Footer /> 
    </div>
  
    </Router>
    
  );
}

export default App;
