type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean; // optional
};

export default function Button2({ onClick, children, disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
