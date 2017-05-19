import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { mounted: false }
  }

  componentDidMount = () => {
    this.setState({ mounted: true })
  }

  handleSubmit = (event) => {
    event.presentDefault();
    this.setState({ mounted: false })
  }

  render() {
    var child;

    if (this.state.mounted) {
      child = (
        <Modal onSubmit={this.handleSubmit} />
      )
    }

    return(
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
              {child}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
