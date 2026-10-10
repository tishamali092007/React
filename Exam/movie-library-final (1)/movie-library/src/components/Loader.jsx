import { Spinner } from 'react-bootstrap';

export default function Loader({ label = 'Loading…' }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5 gap-2" role="status">
      <Spinner animation="border" className="rh-spinner" />
      <span className="text-muted-rh">{label}</span>
    </div>
  );
}
