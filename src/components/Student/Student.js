import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
    constructor() {
      super()
      this.state = {
        student: {}
      }
    }

    componentDidMount(){
      axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(result => {
        this.setState({
          student: result.data
        })
      })
    }

    render() {
      return (
        <div className="box">
          <button onClick={_=>this.props.history.goBack()}>GO BACK</button>
          <h1>Student</h1>
          <h1>{this.state.student.first_name} {this.state.student.last_name}</h1>
          <h3>Grades : {this.state.student.grade}</h3>
          <h3>Email : {this.state.student.email}</h3>
        </div>
      )
    }
}