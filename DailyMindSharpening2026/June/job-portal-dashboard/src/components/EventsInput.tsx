type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function EventsInput({ onChange }: InputProps) {
  return <input onChange={onChange} />;
}
