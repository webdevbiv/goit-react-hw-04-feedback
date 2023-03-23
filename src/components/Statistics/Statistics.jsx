import React from 'react'
import PropTypes from 'prop-types'

function Statistics({ options: { good, neutral, bad }, total, positivePercentage }) {
    return (
        <>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive Percentage: {positivePercentage}%</li>
            </ul>
        </>
    )
}

Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics
