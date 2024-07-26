import { LOGO_ALT } from '../constants/texts';

/**
 * A functional component that renders the navigation bar with a logo image.
 *
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export default function NavBar(): JSX.Element {
    return (
        <nav className='navBar__wrapper'>
            <img
                className="navBar__img"
                src={require('../assets/logo.png')}
                alt={LOGO_ALT}
            />
        </nav>
    );
}
