import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Row, Col, Input, Icon, Button } from 'react-materialize'
import { Link } from 'react-router-dom'

import { getPasswords } from '../actions'
import DataList from './DataList'

class MainPage extends React.Component {
  componentDidMount () {
    axios.get('http://localhost:8080/passwords')
    .then(response => {
      response.data.createdAt = new Date(response.data.createdAt).toDateString()
      response.data.updatedAt = new Date(response.data.updatedAt).toDateString()
      this.props.getData(response.data)
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <Row>
          <Col s={8} className="grid-example" offset="s2">
            <h2>Welcome</h2>
          </Col>
        </Row>
        <Row>
          <Col offset="s2">
        	<Input label="Search here" validate><Icon>find_in_page</Icon></Input>
          </Col>
        </Row>
        <Row>
          <DataList />
        </Row>
        <Row>
          <Col offset="s2">
            <Link to="/create">
              <Button waves='light'>Create New</Button>
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(getPasswords(data))
  }
}

const mapStateToProps = (state) => {
  return {
    passwords: state.password.passwords
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)