import * as React from 'react';
import './generic.css';

export const GenericTemplate: React.FC = ({ children }) => (
  <>
    <main>{children}</main>
    <nav className="navigation">
      <a href="https://effector.now.sh">Effector</a>
      <a href="https://github.com/sergeysova/ball.sova.dev">Source Code</a>
    </nav>
  </>
);
