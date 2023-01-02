import "./style.scss"

interface InputProps {
    value: string;
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ onChange, value }) => {
    return (
        <input className="input" type="text" placeholder="Busque aqui" value={value} onChange={e => onChange(e.target.value)} />
    );
};

export default Input