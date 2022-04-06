import cx from 'classnames';

interface BTitems {
    title: string;
    active?: boolean;
    onClick: () => void;
}

export default function ButtonTab(BTprops: Partial<BTitems>) {
  const { title, active, onClick } = BTprops;
  const btnClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <button type="button" onClick={onClick} className={btnClass}>
      {title}
    </button>
  );
}
