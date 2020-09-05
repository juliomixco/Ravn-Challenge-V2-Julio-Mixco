import React from 'react';

export const Layout: React.SFC<{}> = (props) => (
  <>
    <header className="page-header">
      <div className="header-title">Ravn Star Wars Registry</div>
    </header>
    <div className="page-content content">{props.children}</div>
  </>
);
