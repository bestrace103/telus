// routes
import { paths } from 'src/routes/paths';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/dashboard',
  },
  {
    title: 'About Us',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.dashboard.one,
  },
  {
    title: 'Service',
    icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: paths.dashboard.two,
  },
  {
    title: 'Contact Us',
    icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: paths.dashboard.three,
  },
];
