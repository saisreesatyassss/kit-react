import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/ ',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/ ',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/ ',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/ ',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
