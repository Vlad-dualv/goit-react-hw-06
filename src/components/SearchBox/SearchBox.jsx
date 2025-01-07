import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        placeholder="E.g. Harry Potter"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
