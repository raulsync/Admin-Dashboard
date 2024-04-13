import { Link, useLocation, Location } from 'react-router-dom';
import { RiDashboardFill, RiShoppingBag3Fill } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { PiFileTextFill } from 'react-icons/pi';
import { IconType } from 'react-icons';
import { FaChartBar } from 'react-icons/fa';

const SideBar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Logo .</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            text="Dashboard"
            location={location}
            Icon={RiDashboardFill}
          />
          <Li
            url="/admin/products"
            text="Product"
            location={location}
            Icon={RiShoppingBag3Fill}
          />
          <Li
            url="/admin/customer"
            text="Customer"
            location={location}
            Icon={BsPeopleFill}
          />
          <Li
            url="/admin/transaction"
            text="Transaction"
            location={location}
            Icon={PiFileTextFill}
          />
        </ul>
      </div>
      <div>
        <h5>Charts</h5>
        <ul>
          <Li
            url="/admin/chart/bar"
            text="Bar"
            location={location}
            Icon={FaChartBar}
          />
          <Li
            url="/admin/products"
            text="Product"
            location={location}
            Icon={RiShoppingBag3Fill}
          />
          <Li
            url="/admin/customer"
            text="Customer"
            location={location}
            Icon={BsPeopleFill}
          />
          <Li
            url="/admin/transaction"
            text="Transaction"
            location={location}
            Icon={PiFileTextFill}
          />
        </ul>
      </div>
    </aside>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? 'rgba(0,115,255,0.1)'
        : 'whitesmoke',
    }}
  >
    <Icon />
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? 'rgb(0,115,255)' : 'black',
      }}
    >
      {text}
    </Link>
  </li>
);

export default SideBar;
