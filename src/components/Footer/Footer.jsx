import { useState } from 'react';
import {
  FooterBox,
  FooterContainer,
  FooterH2Styled,
  FooterLinkStyled,
  FooterList,
  FooterStyled,
  SocialLinkStyled,
  SocialListStyled,
} from './Footer.styled';
import { useWindowSize } from '../../hooks/useWindowSize';

import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
} from 'components/Icons/SocialIcons';

export const Footer = () => {
  const [isOpenCatlog, setIsOpenCatalog] = useState(false);
  const [isOpenForClients, setIsOpenForClients] = useState(false);
  const [isOpenContacts, setIsOpenContacts] = useState(false);
  const [isOpenAboutUs, setIsOpenAboutUs] = useState(false);

  const screenWidth = useWindowSize();

 const toggleList = (value) => {
  if(value === 'КАТАЛОГ'){
    setIsOpenCatalog(!isOpenCatlog);
    // setIsOpenForClients(false);
    // setIsOpenContacts(false);
    // setIsOpenAboutUs(false);
  };
  if(value === 'ПОКУПЦЯМ'){
    // setIsOpenCatalog(false);
    setIsOpenForClients(!isOpenForClients);
    // setIsOpenContacts(false);
    // setIsOpenAboutUs(false);
  };
  if(value === 'КОНТАКТИ'){
    // setIsOpenCatalog(false);
    // setIsOpenForClients(false);
    setIsOpenContacts(!isOpenContacts);
    // setIsOpenAboutUs(false);
  };
  if(value === 'ПРО КОМПАНІЮ'){
    // setIsOpenCatalog(false);
    // setIsOpenForClients(false);
    // setIsOpenContacts(false);
    setIsOpenAboutUs(!isOpenAboutUs);
  };
    
  } 
        
      

  return (
    <FooterStyled>
      <FooterContainer>
        <FooterBox onClick={()=>toggleList('КАТАЛОГ')} isOpenCatlog={isOpenCatlog}>
          <FooterH2Styled >КАТАЛОГ</FooterH2Styled>
          <FooterList>
            <li>
              <FooterLinkStyled to="/brands">Бренди</FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Корм для собак
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Корм для котів
              </FooterLinkStyled>
            </li>
          </FooterList>
        </FooterBox>
        <FooterBox onClick={()=>toggleList('ПОКУПЦЯМ')} isOpenForClients={isOpenForClients}>
          <FooterH2Styled >ПОКУПЦЯМ</FooterH2Styled>

          <FooterList>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Політика конфіденційності
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Доставка
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Повернення й обмін
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Про компанію
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Договір публічної оферти
              </FooterLinkStyled>
            </li>
          </FooterList>
        </FooterBox>
        <FooterBox onClick={()=>toggleList('КОНТАКТИ')} isOpenContacts={isOpenContacts}>
          <FooterH2Styled >КОНТАКТИ</FooterH2Styled>
          <FooterList id="contacts">
            <li>
              <FooterLinkStyled href="tel:+380486752312">
                +380486752312
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled
                href="mailto:clawspaws@gmail.com"
                target="_blank"
              >
                clawspaws@gmail.com
              </FooterLinkStyled>
            </li>
          </FooterList>
        </FooterBox>
        {screenWidth<=767 && <FooterBox onClick={()=>toggleList('ПРО КОМПАНІЮ')} isOpenAboutUs={isOpenAboutUs}>
          <FooterH2Styled >ПРО КОМПАНІЮ</FooterH2Styled>
        </FooterBox>}

        {screenWidth<=767 ? <SocialListStyled>
            <li>
              <SocialLinkStyled href="http://instagram.com" target="_blank">
                <InstagramIcon />
              </SocialLinkStyled>
            </li>
            <li>
              <SocialLinkStyled href="http://facebook.com" target="_blank">
                <FacebookIcon />
              </SocialLinkStyled>
            </li>
            <li>
              <SocialLinkStyled href="http://t.me" target="_blank">
                <TelegramIcon />
              </SocialLinkStyled>
            </li>
          </SocialListStyled> :<FooterBox>
          <FooterH2Styled>Соціальні мережі</FooterH2Styled>
          <SocialListStyled>
            <li>
              <SocialLinkStyled href="http://instagram.com" target="_blank">
                <InstagramIcon />
              </SocialLinkStyled>
            </li>
            <li>
              <SocialLinkStyled href="http://facebook.com" target="_blank">
                <FacebookIcon />
              </SocialLinkStyled>
            </li>
            <li>
              <SocialLinkStyled href="http://t.me" target="_blank">
                <TelegramIcon />
              </SocialLinkStyled>
            </li>
          </SocialListStyled>
        </FooterBox>}
      </FooterContainer>
    </FooterStyled>
  );
};
