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

var pages = [
  {
    name: 'Dashboard',
    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard,
  },
  {
    name: 'Icons',
    icon: 'tim-icons icon-atom',
    component: Icons,
  },
  {
    name: 'Notifications',
    icon: 'tim-icons icon-bell-55',
    component: Notifications,
  },
  {
    name: 'User Profile',
    icon: 'tim-icons icon-single-02',
    component: UserProfile,
  },
  {
    name: 'Table List',
    icon: 'tim-icons icon-puzzle-10',
    component: TableList,
  },
  {
    name: 'Typography',
    icon: 'tim-icons icon-align-center',
    component: Typography,
  },
];
export default pages;
