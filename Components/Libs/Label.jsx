const Label = ({ htmlFor, className, children }) => {
    return (
        <label htmlFor={htmlFor} className={`font-semibold ${className}`}>{children}</label>
    );
}

export default Label;