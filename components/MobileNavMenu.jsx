import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Cross from './Cross';
import routes from '../data/routes';
import NavLink from './NavLink';

function MobileNavMenu({ onClose }) {
  return (
    <div className="modal-container">
      <div className="app-container">
        <div className="header-container">
          <Cross onClick={onClose} />
        </div>
        <div className=" h-full flex flex-col justify-center items-center">
          {routes.map(({ href, content }) => (
            <NavLink key={href} onClick={onClose} href={href}>
              {content}
            </NavLink>
          ))}
        </div>
      </div>
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
