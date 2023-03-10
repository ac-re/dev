export const homeUrl = '/';
export const aboutUrl = '/about';
export const servicesUrl = '/services';
export const careerUrl = '/career';
export const contactUrl = '/contact';

const NavList: { title: string; url: string; isPhoneHidden?: boolean; isMdNavHidden?: boolean }[] = [
  {
    title: 'Home',
    url: homeUrl,
    isMdNavHidden: true,
  },
  {
    title: 'About AC Re',
    url: aboutUrl,
  },
  {
    title: 'Services & products',
    url: servicesUrl,
  },
  {
    title: 'Careers',
    url: careerUrl,
  },
  {
    title: 'Contact us',
    url: contactUrl,
  },
];

export default NavList;
