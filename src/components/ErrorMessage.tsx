interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="error-container">
      <div className="error-icon">😵</div>
      <h2>Oups, une erreur est survenue</h2>
      <p className="error-message">{message}</p>
      <button onClick={onRetry} className="retry-btn">
        Réessayer
      </button>
    </div>
  );
}

export default ErrorMessage;
