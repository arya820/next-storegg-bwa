import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface SideItem {
    icon: 'overview' | 'transactions' | 'messages' | 'card' | 'rewards' | 'settings' | 'logout';
    title: string;
    link?: string;
    active?: boolean;
}
export default function MenuItem(SideProps: SideItem) {
  const {
    icon, title, active, link = '/',
  } = SideProps;
  const classItem = cx({
    item: true,
    active,
    'mb-30': true,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/ic-menu-${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={link}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
