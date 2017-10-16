import React, { Component } from 'react';
import {Grid, Row, Col, Button} from "react-bootstrap"
import logo from './logo.svg';
import './App.css';
import GroupButton from './components/GroupButton/GroupButton'

import {data} from "./data/items"


class App extends Component {
constructor(){
  super();
  this.state = {
    data:data
  }
}

click =()=>{
  const [t, ... d] = this.state.data;
  this.setState({data:d});
}
  render() {
    return (
      <Grid>
          <Row>
            <Col md={12}>
            <GroupButton data={this.state.data}/>
            </Col>
          </Row>
          <Row>
            Test
            <ul>
              {this.state.data.map(el=><li key={el}>{el.name}</li>)}
              </ul>
              <Button bsStyle="danger" onClick={this.click}>test</Button>
          </Row>
      </Grid>
      
    );
  }
}

export default App;
