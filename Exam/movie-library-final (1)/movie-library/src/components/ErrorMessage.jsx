import { Alert, Button } from 'react-bootstrap';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <Alert variant="danger" className="d-flex flex-wrap align-items-center justify-content-between gap-2">
      <span>{message}</span>
      {onRetry && (
        <Button size="sm" variant="outline-danger" onClick={onRetry}>
          Try again
        </Button>
      )}
    </Alert>
  );
}
