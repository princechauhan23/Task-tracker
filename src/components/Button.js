import PropTypes from 'prop-types'

import '../css/Button.css'

const Button = ({ color, text, onClick }) => {

    return (
        <button onClick={onClick} 
        style={{backgroundColor: color}} 
        className="btn">
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button