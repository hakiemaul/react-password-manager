import React from 'react'
import { connect } from 'react-redux'
import { Col, Table } from 'react-materialize'

class DataList extends React.Component {
  render () {
    return (
      <Col s={8} className="grid-example" offset="s2">
        <Table>
          <thead>
            <tr>
              <th>Url</th>
              <th>Username</th>
              <th>Password</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
          {this.props.passwords.map((password, index) => (
            <tr key={index}>
              <td>{password.url}</td>
              <td>{password.username}</td>
              <td>{password.password}</td>
              <td>{password.createdAt}</td>
              <td>{password.updatedAt}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Col>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    passwords: state.password.passwords
  }
}

export default connect(mapStateToProps, null)(DataList)