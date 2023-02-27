import './Button.css'

const Button = ({ highlighted, text, href }) => {

    const buttonStyle = {
        fontWeight: highlighted ? 'bold' : 'normal',
        backgroundColor: highlighted ? 'green' : 'grey'
    }

    return (
        <a href={href} className="Button" style={buttonStyle}>{text}</a>
    )
}

export default Button