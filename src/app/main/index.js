import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { loadBooks } from '../../redux/books';
import { remove, liked, showLiked } from '../../redux/books';

import Wrapper from '../../components/wrapper';
import List from '../../components/list';
import Item from '../../components/item';
import LayoutHead from '../../components/layout-head';


function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  const select = useSelector(state => ({
    items: state.books.data,
    showLiked: state.books.showLiked,
  }), shallowEqual);

  const callbacks = {
    btnRemove: useCallback(id =>  dispatch(remove(id)), [dispatch]),
    btnLiked: useCallback(id =>  dispatch(liked(id)), [dispatch]),
    btnFilter: useCallback(() => dispatch(showLiked()), [dispatch])
  };

  const renders = {
    item: useCallback(item => (
      <Item 
        imgURL={item.formats['image/jpeg']} 
        title={item.title} 
        author={item.authors[0]?.name}
        id={item.id}
        btnRemove={callbacks.btnRemove}
        liked={item.liked}
        btnLiked={callbacks.btnLiked}
      />
    ), [callbacks.btnRemove, callbacks.btnLiked]),
  }

  return (
    <Wrapper>
      <LayoutHead title='Список книг'>
        <button onClick={callbacks.btnFilter} style={{fontSize: '18px', cursor: 'pointer'}}>Фильтр по лайкам</button>
      </LayoutHead>
      <List items={select.items} renderItem={renders.item} showLiked={select.showLiked}/>
    </Wrapper>
  )
}

export default React.memo(Main);
