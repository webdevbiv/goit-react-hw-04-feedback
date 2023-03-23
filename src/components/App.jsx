import { useState } from 'react';
import Section from './Section/Section'
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {
    const key = e.target.innerText
    switch (key) {
      case 'good':
        setGood(good + 1)
        break
      case 'neutral':
        setNeutral(neutral + 1)
        break
      case 'bad':
        setBad(bad + 1)
        break
      default:
        return
    }
  }

  const countTotalFeedback = () => {
    let total = good + neutral + bad
    return total
  }

  const countPositiveFeedback = () => {
    let total = countTotalFeedback()
    return total > 0 ? Math.round(good / total * 100) : 0
  }

  return (
    <>
      <Section
        title="Please Leave Feedback"
        children={
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={handleClick}
          />
        }
      />
      <Section
        title="Statistics"
        children={
          countTotalFeedback() > 0 &&
          <Statistics
            options={{ good, neutral, bad }}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          />
        }
      />
    </>
  )
}

