import { Link, NavStyle } from "components";
import { MenuContainer } from "./MobileMenuNav.styled";


export const MobailMenuNav = ({setMobileMenuTogle}) => {
    return(
    <MenuContainer>
        <NavStyle>
              <Link onClick={()=>setMobileMenuTogle(false)} to={'catalog'}>КАТАЛОГ</Link>
              <Link onClick={()=>setMobileMenuTogle(false)} to={'prices-drop'}>АКЦІЇ</Link>
              <Link onClick={()=>setMobileMenuTogle(false)} to={'brands'}>БРЕНДИ</Link>
              <Link onClick={()=>setMobileMenuTogle(false)} to={'aboutUs'}>ПРО КОМПАНІЮ</Link>
              <Link onClick={()=>setMobileMenuTogle(false)} to={'contacts'}>MOBA</Link>
            </NavStyle>
    </MenuContainer>
    );
}