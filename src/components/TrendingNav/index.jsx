import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Wrapper, Header, Hashtags, Hashtag } from './styles';
import DataContext from '../../hooks/DataContext';
import Axios from '../../blueprints';
import { MainPageContext } from '../../hooks/MainPageContext';

export default function TrendingNav() {
  const { hashtags } = useContext(MainPageContext);

  const navigate = useNavigate();

  const onClickHandler = (hashtag) => {
    navigate(`/hashtag/${hashtag}`);
  };

  const hashtagsElements = hashtags ? (
    hashtags.map((hashtag, index) => {
      return (
        <Hashtag
          onClick={() => {
            onClickHandler(hashtag.name);
          }}
          key={index}
        >{`# ${hashtag.name}`}</Hashtag>
      );
    })
  ) : (
    <></>
  );

  return (
    <Wrapper>
      <Header>trending</Header>
      <Hashtags>{hashtagsElements}</Hashtags>
    </Wrapper>
  );
}
