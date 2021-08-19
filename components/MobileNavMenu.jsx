import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Cross from './Cross';
import routes from '../data/routes';
import NavLink from './NavLink';

function MobileNavMenu({ onClose }) {
  return (
    <div className="mobile-nav">
      <Cross onClick={onClose} />
      {routes.map(({ href, content }) => (
        <NavLink key={href} onClick={onClose} href={href}>
          {content}
        </NavLink>
      ))}
    </div>
  );
}

export default function MobileNavMenuPortal(props) {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (client)
    return ReactDOM.createPortal(
      <MobileNavMenu {...props} />,
      document.getElementById('modal-root')
    );
  return null;
}
