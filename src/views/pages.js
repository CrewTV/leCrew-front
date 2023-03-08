import Dashboard from 'views/Dashboard.js';
import Icons from 'views/Icons.js';
import Notifications from 'views/Notifications.js';
import TableList from 'views/TableList.js';
import Typography from 'views/Typography.js';
import UserProfile from 'views/UserProfile.js';
import AssetList from './assets/AssetList';
import CrewList from './crews/CrewList';
import Incorming from './Incoming';

var pages = [
  {
    name: 'Tableau de bord',
    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard,
  },
  {
    name: 'Mes Crews',
    icon: 'tim-icons icon-wallet-43',
    component: CrewList,
  },
  {
    name: 'Mes actifs',
    icon: 'tim-icons icon-coins',
    component: AssetList,
  },
  {
    name: 'Statistiques',
    icon: 'tim-icons icon-chart-bar-32',
    component: Incorming,
  },
];
export default pages;
