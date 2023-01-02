import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks'

const url = 'http://localhost:3001/api/v1/tricks'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      tricks: [
        ]
        
    }
  }
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({isLoaded: true, tricks: [...data]}))
  }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks trickList={this.state.tricks}/>
      </div>
    );
  }
}

export default App;