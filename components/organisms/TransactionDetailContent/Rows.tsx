interface RowItems {
    label: string;
    value: string|number;
    className?: string;
}
export default function Rows(RowProps: Partial<RowItems>) {
  const { label, value, className } = RowProps;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      {' '}
      <span
        className={`purchase-details ${className}`}
      >
        {value}
      </span>

    </p>
  );
}
