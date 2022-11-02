import React from 'react';
import propTypes from 'prop-types';
import './style.scss';

function Layout({children}){

  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: propTypes.node,
}

Layout.defaultProps = {
}

export default React.memo(Layout);
