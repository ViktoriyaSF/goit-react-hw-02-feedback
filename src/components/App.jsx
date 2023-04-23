import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handClick = evt => {
    const { name, value } = evt.target;
    // console.log('клік +1');
    // console.log(evt.target);
    // console.log(value);
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neuter + this.state.bad;
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        {Object.keys(this.state).map(name => (
          <button key={name} name={name} onClick={this.handClick}>
            {name}
          </button>
        ))}
        <h2>Statistics</h2>
        <ul>
          {Object.entries(this.state).map(name => (
            <li key={name[0]}>
              {name[0]} : {name[1]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
