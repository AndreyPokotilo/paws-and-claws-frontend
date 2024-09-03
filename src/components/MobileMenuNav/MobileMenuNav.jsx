import { Leng, LengLinkStyled, Link, NavStyle } from 'components';
import { ArrowWraper, LanguageBurger, MenuContainer } from './MobileMenuNav.styled';
import { useState } from 'react';
import { CaretDown } from 'components/Icons';


export const MobailMenuNav = ({ setMobileMenuTogle }) => {
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const toggleList = () => {
        setIsOpenLanguage(!isOpenLanguage);
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

        <LanguageBurger onClick={toggleList} isOpenLanguage={isOpenLanguage}>
          <p>MOBA</p>
          <ArrowWraper isOpenLanguage={isOpenLanguage} ><CaretDown fill='black'/></ArrowWraper>
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
