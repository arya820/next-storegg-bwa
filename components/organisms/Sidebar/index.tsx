import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SbItems {
  activeMenu: 'overview' | 'transactions' | 'settings';
}
export default function Sidebar(SbProps: SbItems) {
  const { activeMenu } = SbProps;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem icon="overview" title="Overview" link="/member" active={activeMenu === 'overview'} />
          <MenuItem icon="transactions" title="Transactions" link="/member/transactions" active={activeMenu === 'transactions'} />
          <MenuItem icon="messages" title="Messages" />
          <MenuItem icon="card" title="Card" />
          <MenuItem icon="rewards" title="Rewards" />
          <MenuItem icon="settings" title="Settings" link="/member/edit-profile" active={activeMenu === 'settings'} />
          <MenuItem icon="logout" title="Log Out" link="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
