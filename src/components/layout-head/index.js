import React from 'react';
import propTypes from 'prop-types';
import './style.scss';

function LayoutHead({ title, children }){

  return (
    <div className='LayoutHead'>
      <h1 className='LayoutHead-title'>{title}</h1>
      <div className='LayoutHead-side'>{children}</div>
    </div>
  )
}

LayoutHead.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
}

LayoutHead.defaultProps = {
}

export default React.memo(LayoutHead);
