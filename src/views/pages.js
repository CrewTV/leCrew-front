/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from 'views/Dashboard.js';
import Icons from 'views/Icons.js';
import Notifications from 'views/Notifications.js';
import TableList from 'views/TableList.js';
import Typography from 'views/Typography.js';
import UserProfile from 'views/UserProfile.js';
import CrewList from './crews/CrewList';

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
    component: Typography,
  },
  {
    name: 'Statistiques',
    icon: 'tim-icons icon-chart-bar-32',
    component: TableList,
  },
];
export default pages;
