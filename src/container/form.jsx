import React from 'react';
import {Component} from 'react';
import NavBar from './navbar';
import {Card, Button} from 'react-bootstrap';
import logo from '../Assets/cropped-miniatura-logo-FB.jpg';
import "../css/loaddata.css";


class loaddata extends Component{

    State(){};
    render(){
        return(
            <div>
                <NavBar/> <br/> <br/> <br/>
                <div id="formcontainer">
              <Card border="dark"> 
              <Card.Img variant="center" src={logo}
              style={{
                height: "100px",
                width: "100px",
                "align-self": "center"
              }}
              />
              <Card.Title> Enter your Pickup Data Below </Card.Title>
               <Card.Body>          
                    <form>
                        <label for="Name">Church Name</label> <br/>
                       <input type="text" placeholder="Enter your Name"/> <br/> <br/>
                         <label for="email">Weight</label> <br/>
                         <input type="text" placeholder="Enter email"/> <br/> <br/>
                         <label for="company">Store</label> <br/>
                         <input type="text" placeholder="Enter your company name "/> <br/> <br/>
                         <label for="password">Date</label><br/>
                         <input type="password" placeholder="Enter your Password"/> <br/> <br/>
                         <label for="password">Time</label><br/>
                         <input type="password" placeholder="Enter your Password"/> <br/> <br/>
                         <label for="password">Issues/Delays</label><br/>
                         <input type="password" placeholder="Enter your Password"/> <br/> <br/>
                        
                         <Button variant= "primary">Submit</Button>
                      </form>
                 </Card.Body>
               </Card> 
            </div>   
         </div>
        );
    }
 }

    export default loaddata; 