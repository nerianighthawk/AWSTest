import * as React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import axios from 'axios'

interface IProps {
  name?: string,
}
interface IState {
  name: string
}

class App extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
    };
  }

  public getUserList() {
    const url = "https://cafexvl7id.execute-api.us-east-1.amazonaws.com/default/testFunction"
    axios.get(url).then(result => {
      this.setState({name: result.data.items[0].name})
    })
  }

  public render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary" onClick={this.getUserList}>わーい</Button>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
