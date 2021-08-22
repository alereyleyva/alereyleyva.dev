import React from 'react';
import RRSS from './RRSS';
import ToggleTheme from './ToggleTheme';
import routes from '../data/routes';
import NavLink from './NavLink';
import Burguer from './Burguer';

export default function Header() {
  return (
    <header className="header-container">
      <div className="flex items-center">
        <Burguer />
        <ToggleTheme />
      </div>
      <div className="flex lg:hidden">
        {routes.map(({ href, content }) => (
          <NavLink key={href} href={href}>
            {content}
          </NavLink>
        ))}
      </div>

      <RRSS />
    </header>
  );
}
