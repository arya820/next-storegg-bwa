import cx from 'classnames';

interface BTitems {
    title: string;
    active?: boolean;
}

export default function ButtonTab(BTprops: Partial<BTitems>) {
  const { title, active } = BTprops;
  const btnClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <a data-filter="*" href="/#" className={btnClass}>
      {title}

    </a>
  );
}
