import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

export default function MovieGrid({ movies }) {
  return (
    <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
      {movies.map((m) => (
        <Col key={m.id}>
          <MovieCard movie={m} />
        </Col>
      ))}
    </Row>
  );
}
