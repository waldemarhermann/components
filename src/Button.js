import PropTypes from 'prop-types';

const Button = ({
    children,
    primary,
    secondary,
    succes,
    warning,
    danger,
    outline,
    rounded,
}) => {
    return <button>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, succes, warning, danger }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!succes)
            + Number(!!warning)
            + Number(!!danger)

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true')
        }
    }
}

export default Button;