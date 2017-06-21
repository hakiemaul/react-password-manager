import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Input, Button } from 'react-materialize'
import { Link } from 'react-router-dom'

import { checkInput } from '../actions'

class CreateForm extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col s={8} className="grid-example" offset="s2">
            <h2>Password Form</h2>
          </Col>
        </Row>
        <Row>
          <Col offset="s2">
            <Input type="text" label="URL" s={12} />
        		<Input type="text" label="Username" s={12} />
            <Input type="text" label="Password" s={12} onChange={(e) => this.props.validate(e.target.value)} />
          </Col>
        </Row>
        <Row>
          <Col offset="s2">
            <p>Personal Password Widget</p>
            {this.props.validation.capital ? <p>Password sudah memiliki huruf kapital</p> : <p style={{color: "red"}}>Password sebaiknya memiliki huruf kapital</p> }
            {this.props.validation.lowercase ? <p>Password sudah memiliki huruf kecil</p> : <p style={{color: "red"}}>Password sebaiknya memiliki huruf kecil</p> }
            {this.props.validation.special ? <p>Password sudah memiliki karakter spesial</p> : <p style={{color: "red"}}>Password sebaiknya memiliki karakter spesial</p> }
            {this.props.validation.numerical ? <p>Password sudah memiliki karakter numerik</p> : <p style={{color: "red"}}>Password sebaiknya memiliki karakter numerik</p> }
            {this.props.validation.minlength ? <p>Password sudah memiliki minimal 6 karakter</p> : <p style={{color: "red"}}>Password sebaiknya memiliki minimal 6 karakter</p> }
          </Col>
        </Row>
        <Row>
          <Col offset="s2">
            <Link to="/">
              <Button waves='light'>Back To Home</Button>
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    validation: state.password.validation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    validate: (input) => dispatch(checkInput(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)