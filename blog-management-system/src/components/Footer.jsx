export default function Footer() {
  return (
    <footer className="app-footer text-center py-3 mt-auto">
      <small>
        © {new Date().getFullYear()} BlogHub | Made with{" "}
        <i className="bi bi-heart-fill" style={{ color: "#fd79a8" }}></i> using React
      </small>
    </footer>
  );
}