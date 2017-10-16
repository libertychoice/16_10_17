import React, {Component} from 'react'
import {ButtonToolbar, Col, Button} from 'react-bootstrap'
class GroupButton extends Component {
constructor(props){
    super(props);
    this.props = props;
}

render(){
    const {data} = this.props;
    return(
       
        <Col md={10} mdOffset={2}>
        <ButtonToolbar> 
            <Button bsStyle="info">Item-1</Button>
            <Button bsStyle="info">Item-2</Button>
            <Button bsStyle="info">Item-3</Button>
            <Button bsStyle="info">Item-4</Button>
            <Button bsStyle="info">Item-5</Button>
            {data.map(el=><Button key={el.name} bsStyle="info">{el.name}</Button>)}
        </ButtonToolbar>
        <Col md={2}></Col>
        </Col>

      
    )
}

}

GroupButton.defaultProps ={
    data:[],
}

export default GroupButton