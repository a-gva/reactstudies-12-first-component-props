import PropTypes from 'prop-types';
// npm install prop-types

// init: type 'rfce'

// function Header(props) {
//     return <header>
//         <div className="container">
//             <h2>{props.text}</h2>
//         </div>
//     </header>;
// }

function Header({ text }) {
    return <header>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>;
}

Header.defaultProps = {
    text: ' = = = Default Header = = = ',
}

// Type checking for Props... error handling
Header.propTypes = {
    text: PropTypes.string,
    // text: PropTypes.string.isRequired
}

export default Header;
