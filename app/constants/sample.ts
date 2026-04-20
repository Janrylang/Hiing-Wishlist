import type { LayoutItem } from '~/interfaces/sample';

const layout: LayoutItem[] = [
  {
    text: 'Dashboard',
    to: '/dashboard',
    icon: 'material-symbols:dashboard-outline',
  },
  {
    text: 'My Wishlists',
    to: '/my-wishlists',
    icon: 'material-symbols:featured-seasonal-and-gifts-rounded'
  },
  {
    text: 'Gift Groups',
    to: '/gift-groups',
    icon: 'heroicons:user-group',
  },
  {
    text: 'Gift Ideas',
    to: '/gift-ideas',
    icon: 'icons8:idea',
  },
  {
    text: 'My Account',
    to: '/my-account',
    icon: 'material-symbols-light:account-box-outline',
  },
  {
    text: 'Settings',
    to: '/settings',
    icon: 'solar:settings-outline',
  },
  {
    text: 'Log Out',
    to: '/',
    icon: 'mdi-light:logout',
  },
  // {
  //   text: 'Service Management',
  //   subtext: [
  //     {
  //       text: 'Service',
  //       to: '/admin/service',
  //     },
  //     {
  //       text: 'Service Category',
  //       to: '/admin/service-category',
  //     },
  //     {
  //       text: 'Add On Service',
  //       to: '/admin/add-on',
  //     },
  //   ],
  //   icon: 'mdi-wrench',
  // },
  // {
  //   text: 'User Management',
  //   to: '/admin/user-management',
  //   icon: 'mdi-account-group',
  // },
];

export default layout;
