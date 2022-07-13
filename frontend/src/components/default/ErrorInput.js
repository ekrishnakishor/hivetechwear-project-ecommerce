const ErrorInput = (props) => {
    const { error, optClasses } = props;
    return error ? <span className={`error-text ${optClasses ? optClasses : ''}` }>{error[0]}</span> : ""
}

export default ErrorInput;

