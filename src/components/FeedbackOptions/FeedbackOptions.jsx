import React from 'react'
import PropTypes from 'prop-types'

function FeedbackOptions({ options, onLeaveFeedback }) {
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
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions
