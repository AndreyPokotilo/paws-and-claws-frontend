import { Link } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

import {
  ButtonMenu,
  ButtonSearch,
  Count,
  CountContainer,
  CountWrapper,
  HeaderContainer,
  HeaderStyled,
  HeaderWrapper,
  LogoLink,
  Leng,
  LengLinkStyled,
  LinkWrapper,
  ProfilBtn,
  ButtonWrapper,
  // SearchBox,
} from './Header.styled';
import {
  CartIcon,
  CartNotEmptyIcon,
  HeartIcon,
  LogoIcon,
  MenuIcon,
  ProfileIcon,
  SearchIcon,
} from 'components/Icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors/selectors';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { MobailMenuNav } from 'components/MobileMenuNav/MobileMenuNav';

// import { Search } from './Search';

export const Header = () => {
  const [scroll, setScroll] = useState('');
  const [userMenuTogle, setUserMenuTogle] = useState(false);
  const [mobileMenuTogle, setMobileMenuTogle] = useState(false);
  const [searchBarTogle, setSearchBarTogle] = useState(false);
  const { isLoggedIn, isShowUserMenu } = useAuth();
  const cartStore = useSelector(selectCartStore);
  const screenWidth = useWindowSize();

  const totalCount = cartStore.reduce((previousValue, { cardCount }) => {
    return previousValue + cardCount;
  }, 0);

  const countDigits = number => {
    return number.toString().length;
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setScroll('scroll');
      } else {
        setScroll('');
      }
    });
  }, []);

  useEffect(() => {
    if (isShowUserMenu) {
      setUserMenuTogle(true);
    }
  }, [isShowUserMenu]);

  // const menuTogle = ()=>setRegistrMenuTogle(true)

  return (
    <HeaderStyled className={scroll}>
      <HeaderContainer>
      {searchBarTogle && screenWidth <= 767 ? (
            <SearchBar setSearchBarTogle={setSearchBarTogle}/>
          ) : <HeaderWrapper>
           
            
              {screenWidth <= 767 ? (
                <>
                  <ButtonWrapper>
                    <ButtonMenu
                      onClick={() => setMobileMenuTogle(!mobileMenuTogle)}
                    >
                      <MenuIcon />
                    </ButtonMenu>

                    <ButtonSearch
                      onClick={() => setSearchBarTogle(!searchBarTogle)}
                    >
                      <SearchIcon />
                    </ButtonSearch>
                  </ButtonWrapper>

                  <LogoLink to="/" className="logo">
                    <LogoIcon />
                  </LogoLink>
                </>
              ) : (
                <>
                  <LogoLink to="/" className="logo">
                    <LogoIcon />
                  </LogoLink>
                  <SearchBar />
                </>
              )}
              <LinkWrapper>
                <ProfilBtn
                  onClick={() => setUserMenuTogle(true)}
                  disabled={userMenuTogle}
                  isLoggedIn={isLoggedIn}
                >
                  <ProfileIcon />
                </ProfilBtn>
                <button>
                  <HeartIcon />
                </button>

                <Link to={'/cart'}>
                  {totalCount > 0 ? (
                    <CountContainer>
                      <CartNotEmptyIcon countDigits={countDigits(totalCount)} />

                      <CountWrapper>
                        <Count countDigits={countDigits(totalCount)}>
                          {totalCount}
                        </Count>
                      </CountWrapper>
                    </CountContainer>
                  ) : (
                    <CartIcon />
                  )}
                </Link>

                {screenWidth >= 768 && (
                  <Leng>
                    <LengLinkStyled>Eng</LengLinkStyled>
                    <LengLinkStyled className="accent">Укр</LengLinkStyled>
                  </Leng>
                )}
                {userMenuTogle ? (
                  <UserMenu setUserMenuTogle={setUserMenuTogle} />
                ) : null}
              </LinkWrapper>
            
          
        </HeaderWrapper>
        }
        {mobileMenuTogle && (
          <MobailMenuNav setMobileMenuTogle={setMobileMenuTogle} />
        )}
      </HeaderContainer>
    </HeaderStyled>
  );
};
