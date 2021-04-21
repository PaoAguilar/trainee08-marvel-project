import React from 'react';
import { ChildrenProps } from '../types/interfaces';
import '../styles/layout.scss';
import { useHistory } from 'react-router-dom';

const Layout = ({ children }: ChildrenProps) => {
  const history = useHistory();
  return (
    <div className="content">
      <div className="content__wrap-info">
        <div className="content__bg">
          <div className="content__logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
              alt="logo-marvel"
              onClick={() => {
                history.push('/');
              }}
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
