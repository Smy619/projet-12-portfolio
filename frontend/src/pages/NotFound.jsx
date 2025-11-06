import { Link } from "react-router-dom";
import "../assets/styles/_notfound.scss";

function NotFound() {
  return (
    <section className="notfound section text-center d-flex flex-column align-items-center justify-content-center vh-100">
      <div data-aos="fade-up">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p className="mt-3 text-muted">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary mt-4">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
