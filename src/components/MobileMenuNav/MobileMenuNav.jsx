import { Leng, LengLinkStyled, Link, NavStyle } from 'components';
import { MenuContainer } from './MobileMenuNav.styled';

export const MobailMenuNav = ({ setMobileMenuTogle }) => {
  return (
    <MenuContainer>
      <NavStyle>
        <div>
          <p>КАТАЛОГ</p>
          <Link onClick={() => setMobileMenuTogle(false)} to={'catalog'}>
          КАТАЛОГ
        </Link>
        </div>
        <div>
          <Link onClick={() => setMobileMenuTogle(false)} to={'prices-drop'}>
          АКЦІЇ
        </Link>
        </div>
        <div>
          <Link onClick={() => setMobileMenuTogle(false)} to={'brands'}>
          БРЕНДИ
        </Link>
        </div>
        <div>
          <p>ПРО КОМПАНІЮ</p>
          <Link onClick={() => setMobileMenuTogle(false)} to={'aboutUs'}>
          Про компанію
        </Link>
        <Link onClick={() => setMobileMenuTogle(false)} to={'contacts'}>
        Контакти
        </Link>
        </div>
        <div>
          <p>MOBA</p>
          <Link onClick={() => setMobileMenuTogle(false)} to={'contacts'}>
          MOBA
        </Link>
        <Leng>
              <LengLinkStyled>Eng</LengLinkStyled>
              <LengLinkStyled className="accent">Укр</LengLinkStyled>
            </Leng>
        </div>
        
        
        
        
        
      </NavStyle>
    </MenuContainer>
  );
};
