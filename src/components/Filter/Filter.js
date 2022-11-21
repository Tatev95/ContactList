const Filter = ({ filter, onChange }) => {
    return <input type="text"
        className="serach"
        name="filter"
        value={filter}
        onChange={({target}) => onChange(target.value)}
        placeholder="Search Contact"
    />
}

export default Filter;