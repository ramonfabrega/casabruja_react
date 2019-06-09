import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const links = {
  loggedIn: [
    { name: 'home', label: 'Store', link: '/' },
    { name: 'cart', label: 'Cart', link: '/cart' },
    { name: 'list', label: 'Purchase History', link: '/history' },
    { name: 'user', label: 'Account', link: '/profile' },
    { name: 'log out', label: 'Logout', link: '/logout' }
  ],
  loggedOut: [
    { name: 'home', label: 'Store', link: '/' },
    { name: 'cart', label: 'Cart', link: '/cart' },
    { name: 'sign in', label: 'Login', link: '/login' },
    { name: 'user plus', label: 'Register', link: '/register' }
  ]
};

const NavLinks = ({ loggedIn }) => {
  const l = loggedIn ? links.loggedIn : links.loggedOut;

  const linksArr = [];

  l.forEach((l, i) => {
    linksArr.push(
      <Menu.Item as={Link} to={l.link} key={i}>
        <Icon name={l.name} />
        {l.label}
      </Menu.Item>
    );
  });

  return <React.Fragment>{linksArr}</React.Fragment>;
};

export default NavLinks;
