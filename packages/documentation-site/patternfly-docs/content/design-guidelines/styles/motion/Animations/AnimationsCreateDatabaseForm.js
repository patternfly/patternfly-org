import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { AlertGroup, Alert, Button, Form, FormGroup, FormHelperText, FormAlert, FormGroupLabelHelp, HelperText, HelperTextItem, TextInput, Popover, ActionGroup } from '@patternfly/react-core';
import { useGuidedTour } from './GuidedTourContext';
export const AnimationsCreateDatabaseForm = ({ onClose }) => {
    // State variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Submit state variables
    const [isSuccess, setIsSuccess] = useState(false);
    const [actionCompleted, setActionCompleted] = useState(false);
    const { renderTourStepElement } = useGuidedTour();
    const labelHelpRef = useRef(null);
    // Reverting useState to infer the type as a generic string
    const [isNameValid, setIsNameValid] = useState('default');
    const [isPasswordValid, setIsPasswordValid] = useState('default');
    const [isEmailValid, setIsEmailValid] = useState('default');
    const handleNameChange = (_event, name) => {
        setName(name);
    };
    const handleEmailChange = (_event, email) => {
        setEmail(email);
    };
    const handlePasswordChange = (_event, password) => {
        setPassword(password);
    };
    const validateName = (value) => /^[a-z0-9-]+$/.test(value) && value.length > 0;
    const validatePassword = (value) => value.length >= 12 && /[0-9]/.test(value) && /[A-Z]/.test(value);
    const validateEmail = (value) => value.includes('@');
    const handleNameBlur = () => {
        setIsNameValid(validateName(name) ? 'success' : 'error');
    };
    const handlePasswordBlur = () => {
        setIsPasswordValid(validatePassword(password) ? 'success' : 'error');
    };
    const handleEmailBlur = () => {
        setIsEmailValid(validateEmail(email) ? 'success' : 'error');
    };
    const handleSubmit = () => {
        const isNameCurrentValid = validateName(name);
        const isPasswordCurrentValid = validatePassword(password);
        const isEmailCurrentValid = validateEmail(email);
        setIsNameValid(isNameCurrentValid ? 'success' : 'error');
        setIsPasswordValid(isPasswordCurrentValid ? 'success' : 'error');
        setIsEmailValid(isEmailCurrentValid ? 'success' : 'error');
        const allFieldsValid = isNameCurrentValid && isPasswordCurrentValid && isEmailCurrentValid;
        setActionCompleted(true);
        setIsSuccess(allFieldsValid);
    };
    const onReset = () => {
        setIsNameValid('default');
        setIsPasswordValid('default');
        setIsEmailValid('default');
    };
    return renderTourStepElement('validationErrors', _jsxs(Form, { isWidthLimited: true, id: "create-database-form", children: [actionCompleted && isSuccess ? (_jsx(FormAlert, { children: _jsx(AlertGroup, { hasAnimations: true, isLiveRegion: true, children: _jsx(Alert, { variant: "success", title: "Successfully created database", isInline: true, timeout: 4000, timeoutAnimation: 4000 }) }) })) : null, _jsxs(FormGroup, { label: "Database instance name", labelHelp: _jsx(Popover, { triggerRef: labelHelpRef, headerContent: _jsx("div", { children: "The name of your database" }), bodyContent: _jsx("div", { children: _jsx("p", { children: "The name of your database is used to identify it in the system. It must be unique and cannot be changed later." }) }), children: _jsx(FormGroupLabelHelp, { ref: labelHelpRef, "aria-label": "More info for name field" }) }), isRequired: true, fieldId: "simple-form-name-01", children: [_jsx(TextInput, { isRequired: true, type: "text", id: "simple-form-name-01", name: "simple-form-name-01", "aria-describedby": "simple-form-name-01-helper", value: name, onChange: handleNameChange, onBlur: handleNameBlur, validated: isNameValid }), isNameValid === 'error' && (_jsx(FormHelperText, { children: _jsx(HelperText, { children: _jsx(HelperTextItem, { variant: isNameValid, children: "Must contain only lowercase letters, numbers, and hyphens." }) }) }))] }), _jsxs(FormGroup, { label: "Admin email", isRequired: true, fieldId: "simple-form-email-01", children: [_jsx(TextInput, { isRequired: true, type: "email", id: "simple-form-email-01", name: "simple-form-email-01", value: email, onChange: handleEmailChange, onBlur: handleEmailBlur, validated: isEmailValid }), isEmailValid === 'error' && (_jsx(FormHelperText, { children: _jsx(HelperText, { children: _jsx(HelperTextItem, { variant: isEmailValid, children: "Must be a valid email address containing an @ symbol." }) }) }))] }), _jsxs(FormGroup, { label: "Admin password", isRequired: true, fieldId: "simple-form-password-01", children: [_jsx(TextInput, { isRequired: true, type: "password", id: "simple-form-password-01", name: "simple-form-password-01", value: password, onChange: handlePasswordChange, onBlur: handlePasswordBlur, validated: isPasswordValid }), isPasswordValid === 'error' && (_jsx(FormHelperText, { children: _jsx(HelperText, { children: _jsx(HelperTextItem, { variant: isPasswordValid, children: "Password must be at least 12 characters and include one uppercase letter and one number." }) }) }))] }), _jsxs(ActionGroup, { children: [_jsx(Button, { id: "create-database-submit", variant: "primary", onClick: handleSubmit, children: "Submit" }), _jsx(Button, { variant: "link", onClick: onClose, children: "Cancel" }), _jsx(Button, { className: "pf-u-ml-2xl", variant: "link", onClick: onReset, children: "Reset" })] })] }));
};
//# sourceMappingURL=AnimationsCreateDatabaseForm.js.map