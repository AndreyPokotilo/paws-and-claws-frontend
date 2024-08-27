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
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterBox>
          <FooterH2Styled onClick={()=>setIsOpenCatalog(true)}>КАТАЛОГ</FooterH2Styled>
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
        <FooterBox>
          <FooterH2Styled onClick={()=>setIsOpenForClients(true)}>ПОКУПЦЯМ</FooterH2Styled>

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
        <FooterBox>
          <FooterH2Styled onClick={()=>setIsOpenContacts(true)}>КОНТАКТИ</FooterH2Styled>
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
        <FooterBox>
          <FooterH2Styled onClick={()=>setIsOpenContacts(true)}>ПРО КОМПАНІЮ</FooterH2Styled>
        </FooterBox>
        <FooterBox>
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
        </FooterBox>
      </FooterContainer>
    </FooterStyled>
  );
};
