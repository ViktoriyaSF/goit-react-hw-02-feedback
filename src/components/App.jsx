import React, { Component } from 'react';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { Layout } from './Layout/Layout';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //щоб рахувалась кнопка
  onLeaveFeedback = evt => {
    const { name } = evt.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  //підрахунок загальної суми
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  //підрахунок %% позитивних відгуків
  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          ></Statistics>
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}

//ще один варіант розмітки

/* <h2>Statistics</h2>
    <ul>
      {Object.entries(this.state).map(name => (
        <li key={name[0]}>
          {name[0]} : {name[1]}
        </li>
      ))}
    </ul>
    <p>Total: {this.countTotalFeedback(this.state)}</p>
    <p>
      Positive feedback: {this.countPositiveFeedbackPercentage(this.state)}%
    </p> */
