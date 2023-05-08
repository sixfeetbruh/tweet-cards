import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterUsers } from 'redux/filter/filterSlice';
import {
  Bar,
  FilterLabel,
  FilterSelect,
  HeaderWrapper,
  StyledLink,
  TweetsLogo,
} from './AppBar.styled';
import TweetsLogoImage from 'images/tweets-logo.png';

export const AppBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSelect = evt => {
    dispatch(filterUsers(evt.target.value));
  };

  return (
    <Bar>
      <HeaderWrapper>
        <TweetsLogo
          to={'/'}
          state={{ from: location }}
          aria-label="link to home page on logo click"
        >
          <img
            src={TweetsLogoImage}
            alt="logo tweet-cards"
            aria-label="page logo"
          />
        </TweetsLogo>
        <nav>
          {location.pathname === '/' && (
            <StyledLink
              to={'/tweets'}
              state={{ from: location }}
              aria-label="link to tweets page"
            >
              tweets
            </StyledLink>
          )}
          {location.pathname === '/tweets' && (
            <StyledLink
              to={'/'}
              state={{ from: location }}
              aria-label="link to home page"
            >
              back
            </StyledLink>
          )}
        </nav>
        {location.pathname === '/tweets' && (
          <FilterLabel>
            select by status
            <FilterSelect onChange={handleSelect}>
              <option value={'all'}>All</option>
              <option value={'follow'}>Follow</option>
              <option value={'following'}>Following</option>
            </FilterSelect>
          </FilterLabel>
        )}
      </HeaderWrapper>
    </Bar>
  );
};
