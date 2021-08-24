import * as React from 'react';
import './generic.css';

export const GenericTemplate: React.FC = ({ children }) => (
  <>
    <main>{children}</main>
    <nav className="navigation">
      <a href="https://effector.dev">Effector</a>
      <a href="https://github.com/sergeysova/ballsort">Source Code</a>
    </nav>
  </>
);
