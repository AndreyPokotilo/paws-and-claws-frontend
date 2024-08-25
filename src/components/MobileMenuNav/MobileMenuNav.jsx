import { Link, NavStyle } from "components";
import { MenuContainer } from "./MobileMenuNav.styled";


export const MobailMenuNav = () => {
    return(
    <MenuContainer>
        <NavStyle>
              <Link to={'catalog'}>КАТАЛОГ</Link>
              <Link to={'prices-drop'}>АКЦІЇ</Link>
              <Link to={'brands'}>БРЕНДИ</Link>
              <Link to={'aboutUs'}>ПРО КОМПАНІЮ</Link>
              <Link to={'contacts'}>МОВА</Link>
            </NavStyle>
    </MenuContainer>
    );
}