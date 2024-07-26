import React from 'react';
import { SUBMIT } from '../constants/texts';
import Button from './Button';

interface FormProps {
    labelText: string;
    inputProps: React.InputHTMLAttributes<HTMLInputElement>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit?: () => void;
    submit: boolean;
}

/**
 * A functional component that renders a form with an input field and optional submit button.
 *
 * @param {FormProps} props - The props for the component.
 * @param {string} props.labelText - The label text to display for the input field.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props.inputProps - Props to be passed to the input element.
 * @param {function} props.handleInput - Function to handle input changes.
 * @param {function} [props.handleSubmit] - Optional function to handle form submission.
 * @param {boolean} props.submit - Whether to display the submit button.
 * @returns {JSX.Element} The rendered form component.
 */
const Form: React.FC<FormProps> = ({ labelText, inputProps, handleInput, handleSubmit, submit }) => {
    return (
        <form
            className="form__wrapper"
            onSubmit={(e) => {
                e.preventDefault();
                if (submit && handleSubmit) {
                    handleSubmit();
                }
            }}
        >
            <div className="form__field">
                <label>{labelText}</label>
                <input {...inputProps} onChange={handleInput} />
                {submit && <Button label={SUBMIT} />}
            </div>
        </form>
    );
};

export default Form;
