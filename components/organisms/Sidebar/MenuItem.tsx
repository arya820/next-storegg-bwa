/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface SideItem {
    icon: 'overview' | 'transactions' | 'messages' | 'card' | 'rewards' | 'settings' | 'logout';
    title: string;
    link?: string;
    active?: boolean;
    onClick?: () => void;
}
export default function MenuItem(SideProps: SideItem) {
  const {
    icon, title, active, link = '/', onClick,
  } = SideProps;
  const classItem = cx({
    item: true,
    active,
    'mb-30': true,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/ic-menu-${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        )
          : (
            <Link href={link}>
              <a className="text-lg text-decoration-none">{title}</a>
            </Link>
          )}
      </p>
    </div>
  );
}
