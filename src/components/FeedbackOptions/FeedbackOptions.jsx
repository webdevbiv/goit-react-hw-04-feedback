import React from 'react'
import PropTypes from 'prop-types'

function FeedbackOptions({ good, neutral, bad, onLeaveFeedback }) {
    const options = { good, neutral, bad }
    return (
        <>
            {Object.keys(options).map((item) => (
                <button
                    key={item}
                    onClick={onLeaveFeedback}
                >{item}</button>
            ))}
        </>
    )
}

FeedbackOptions.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions
