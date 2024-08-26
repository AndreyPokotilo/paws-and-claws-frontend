import { Leng, LengLinkStyled, Link, NavStyle } from 'components';
import { LanguageBurger, MenuContainer } from './MobileMenuNav.styled';
import { useState } from 'react';

export const MobailMenuNav = ({ setMobileMenuTogle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleList = () => {
        setIsOpen(!isOpen);
      };

  return (
    <MenuContainer>
      <NavStyle>
        <Link onClick={() => setMobileMenuTogle(false)} to={'catalog'}>
          КАТАЛОГ
        </Link>

        <Link onClick={() => setMobileMenuTogle(false)} to={'prices-drop'}>
          АКЦІЇ
        </Link>

        <Link onClick={() => setMobileMenuTogle(false)} to={'brands'}>
          БРЕНДИ
        </Link>

        <Link onClick={() => setMobileMenuTogle(false)} to={'aboutUs'}>
          ПРО КОМПАНІЮ
        </Link>
        <Link onClick={() => setMobileMenuTogle(false)} to={'contacts'}>
          КОНТАКТИ
        </Link>

        <LanguageBurger onClick={toggleList} isOpen={isOpen}>
          <p>MOBA</p>
          <Leng>
            <LengLinkStyled>English</LengLinkStyled>
            <LengLinkStyled>Deutsch</LengLinkStyled>
            <LengLinkStyled className="accent">Українська</LengLinkStyled>
          </Leng>
        </LanguageBurger>
      </NavStyle>
    </MenuContainer>
  );
};
