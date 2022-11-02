import React from 'react';
import propTypes from 'prop-types';
import './style.scss';

function List({ items, renderItem, showLiked }) {

  return (
    <div className='List'>{items.map((item, index) =>
      <div 
        key={index} 
        className={showLiked ? 
          (item.liked ? 'List-item' : 'List-item display-none') 
          : 'List-item'}>
        {renderItem(item)}
      </div>
    )}
    </div>
  )
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  renderItem: propTypes.func.isRequired,
  showLiked: propTypes.bool,
}

List.defaultProps = {
  items: [],
  showLiked: false,
}

export default React.memo(List);
