import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import './style.scss';
import Checkbox from '../checkbox';

function Item({ imgURL, title, author, id, btnRemove, liked, btnLiked }) {

  const callbacks = {
    btnRemove: useCallback(() => btnRemove(id), [btnRemove, id]),
    btnLiked: useCallback(() => btnLiked(id), [btnLiked, id])
  };

  return (
    <div className='Item'>
      <div className='Item-left'>
        <img src={imgURL} alt='book'></img>
      </div>
      <div className='Item-right'>
        <div className='Item-title'><b>Название книги: </b>{title}</div>
        <div className='Item-author'><b>Автор: </b>{author}</div>
        <div className='Item-buttons'>
          <Checkbox value={liked} onChange={callbacks.btnLiked}/>
          <i onClick={callbacks.btnRemove} className='fa-solid fa-trash Item-button-delete'></i>
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  imgURL: propTypes.string.isRequired,
  title: propTypes.string,
  author: propTypes.string,
  id: propTypes.number.isRequired,
  btnRemove: propTypes.func,
  liked: propTypes.bool,
  btnLiked: propTypes.func,
}

Item.defaultProps = {
  title: 'Название',
  author: 'Имя автора',
  btnRemove: () => {},
  liked: false,
  btnLiked: () => {},
}

export default React.memo(Item);
