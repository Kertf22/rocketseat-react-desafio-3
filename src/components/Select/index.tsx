import "./style.scss"
interface SelectProps {
    options: {
        value: string
        label: string
    }[]
    onChange: (value: string) => void
};

const Select = ({
    options,
    onChange
}: SelectProps) => {

    if (!options.length) return null;

    return (
        <select
            className="select"
            value={options[0].value}
            onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
};

export default Select;