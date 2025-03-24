import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourses'
import { Container,Card,Row,Col } from 'reactstrap';
import Menu from './components/Menu';
import {BrowseRouter as Router,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <ToastContainer />
       <Container>
         <Header/>
            <Row>
              <Col md={4}>
              <Menu/>
              </Col>
              <Col md={8}>

              <Route path='/' Component={Home} exact/>
              <Route path='/add-courses' Component={AddCourse} exact/>
              <Route path='/view-courses' Component={AllCourses} exact/>
              
              <Home/>
              </Col>
            </Row>
       </Container> 
      </Router> 
    </div>
  );
}

export default App;
