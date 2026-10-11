export default function SearchBar({ value, onChange, placeholder = "Search by title or author..." }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}