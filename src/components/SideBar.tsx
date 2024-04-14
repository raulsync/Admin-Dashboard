import { Link, useLocation, Location } from 'react-router-dom';
import {
  RiDashboardFill,
  RiHandCoinFill,
  RiShoppingBag3Fill,
} from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { PiFileTextFill } from 'react-icons/pi';
import { IconType } from 'react-icons';
import { MdOutlineBarChart } from 'react-icons/md';
import { BiSolidCoupon, BiSolidPieChart } from 'react-icons/bi';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { GiStopwatch } from 'react-icons/gi';

const SideBar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Logo .</h2>
      <DashBoard location={location} />
      <Charts location={location} />
      <Apps location={location} />
    </aside>
  );
};

const DashBoard = ({ location }: { location: Location }) => (
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
);

const Charts = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/bar"
        text="Bar"
        location={location}
        Icon={MdOutlineBarChart}
      />
      <Li
        url="/admin/chart/pie"
        text="Pie"
        location={location}
        Icon={BiSolidPieChart}
      />
      <Li
        url="/admin/chart/line"
        text="Line"
        location={location}
        Icon={AiOutlineAreaChart}
      />
    </ul>
  </div>
);

const Apps = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/app/stopwatch"
        text="Stopwatch"
        location={location}
        Icon={GiStopwatch}
      />
      <Li
        url="/admin/app/coupon"
        text="Coupon"
        location={location}
        Icon={BiSolidCoupon}
      />
      <Li
        url="/admin/app/toss"
        text="Toss"
        location={location}
        Icon={RiHandCoinFill}
      />
    </ul>
  </div>
);

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
