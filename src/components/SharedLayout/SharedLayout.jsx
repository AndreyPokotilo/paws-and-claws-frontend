import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

import Loader from 'components/Loader/Loader';
import {
  BoxMT,
  Footer,
  Header,
  Container,
  Section,
  SharedLayoutBox,
  Main,
  NavStyle,
  Link,
  ScrollToTopOnRouteChange,
} from 'components';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Breadcrumbs from 'components/Breadcrumbs/BreadCrumbs';
import { useDispatch } from 'react-redux';
import { showUserPage } from 'redux/slice/authSlice';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate()

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const screenWidth = useWindowSize();

  useEffect(()=>{
      
  if(token) {
    localStorage.setItem("accessToken", token);
    dispatch(showUserPage());
    navigation('user')
  }
  },[token, dispatch, navigation])

  return (
    <SharedLayoutBox className="SharedLayoutBox">
      <ScrollToTopOnRouteChange />
      <Header />
      <Section>
        <Container>
          <BoxMT>
            {screenWidth >= 768 && <NavStyle>
              <Link to={'catalog'}>Каталог</Link>
              <Link to={'prices-drop'}>Акції</Link>
              <Link to={'brands'}>Бренди</Link>
              <Link to={'aboutUs'}>Про компанію</Link>
              <Link to={'contacts'}>Контакти</Link>
            </NavStyle>}
            <Main>
              <Suspense fallback={<Loader />}>
                <Breadcrumbs />
                <Outlet />
              </Suspense>
              <ScrollToTop />
            </Main>
          </BoxMT>
        </Container>
      </Section>

      <Footer />
    </SharedLayoutBox>
  );
};

export default SharedLayout;
