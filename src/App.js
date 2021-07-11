import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/pages/Home';
import JobForm from './Components/JobForm';
import JobSearch from './Components/pages/JobSearch';
import { uuid } from "uuidv4";

function App () {
  const [data, setdata] = useState([]);
  const LOCAL_STORAGE_KEY = "data";


  const addJobHandler = (contact) => {
    console.log(contact);
    setdata([...data, { id: uuid(), ...contact }]);
  };

  useEffect(() => {
    const retrivedata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivedata) setdata(retrivedata);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);


    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route
                  path='/jobPost'
                  exact render={(props) => (
                    <JobForm
                        {...props}
                        addJobHandler={addJobHandler}
                    />
                  )}
              />
            <Route
                path='/jobSearch'
                exact render={(props) => (
                    <JobSearch
                      {...props}
                      data={data}
                    />
                )}
            />
          </Switch>
          <Footer />
        </Router>
      </div>
    );

};

export default App;
