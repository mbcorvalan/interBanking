import React from 'react';


interface ButtonLayoutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    icon?: JSX.Element;
}

/**
 * A functional component that renders a button with optional icon and label.
 *
 * @param {ButtonLayoutProps} props - The props for the component.
 * @param {string} [props.label] - The label text to display on the button.
 * @param {JSX.Element} [props.icon] - The icon to display on the button, can be a React element.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - Additional button attributes and event handlers.
 * @returns {JSX.Element} The rendered button component.
 */

const ButtonLayout: React.FC<ButtonLayoutProps> = ({ label, icon, ...props }: ButtonLayoutProps): JSX.Element => {
    return (
        <button className="button" {...props}>
            {icon && <span className="button-icon">{icon}</span>}
            {label && <span className="button-label">{label}</span>}
        </button>
    );
};

export default ButtonLayout;
