import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    counterFeetback = option => {
        this.setState(prevState => ({
        [option]: prevState[option] + 1,
        }));
    };
  
    countTotalFeedback = () => {
        const totalFeedback = this.state.bad + this.state.good + this.state.neutral;
        return totalFeedback;
    };

    countPositiveFeedbackPercentage = () => {
        // const percent = this.countTotalFeedback() ? (this.state.good * 100) / this.countTotalFeedback() : 0;
        const percent = (this.state.good * 100) / this.countTotalFeedback();
        return Math.round(percent);
      };

    render() { 
        return (
            <>
                <Section title="Please laeve feetback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.counterFeetback}
                    />
                </Section>

                {this.countTotalFeedback() ? (
                    <Section title="Statistics">
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            percent={this.countPositiveFeedbackPercentage()}
                        />
                    </Section>
                ) :
                (<Notification message="There is no feedback" />)}
            </>
        );
    }
}
    
export default App;
