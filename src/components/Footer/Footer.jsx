import { useState } from 'react';
import {
  ArrowWraper,
  FooterBox,
  FooterContainer,
  FooterH2Styled,
  FooterLinkStyled,
  FooterList,
  FooterStyled,
  SocialLinkStyled,
  SocialListStyled,
  ContactsList,
  InfoList,
  InfoLink,
  LicenseLink
} from './Footer.styled';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  CaretDown,
  EmailIcon,
  FacebookSquare,
  PersonArmsSpread,
  MdiYoutube,
} from 'components/Icons';
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

  const toggleList = value => {
    if (value === 'КАТАЛОГ') {
      setIsOpenCatalog(!isOpenCatlog);
      // setIsOpenForClients(false);
      // setIsOpenContacts(false);
      // setIsOpenAboutUs(false);
    }
    if (value === 'ПОКУПЦЯМ') {
      // setIsOpenCatalog(false);
      setIsOpenForClients(!isOpenForClients);
      // setIsOpenContacts(false);
      // setIsOpenAboutUs(false);
    }
    if (value === 'КОНТАКТИ') {
      // setIsOpenCatalog(false);
      // setIsOpenForClients(false);
      setIsOpenContacts(!isOpenContacts);
      // setIsOpenAboutUs(false);
    }
    if (value === 'ПРО КОМПАНІЮ') {
      // setIsOpenCatalog(false);
      // setIsOpenForClients(false);
      // setIsOpenContacts(false);
      setIsOpenAboutUs(!isOpenAboutUs);
    }
  };

  return (
    <FooterStyled>
      <FooterContainer>
        <FooterBox
          onClick={() => toggleList('КАТАЛОГ')}
          isOpenCatlog={isOpenCatlog}
        >
          <FooterH2Styled>КАТАЛОГ</FooterH2Styled>
          <ArrowWraper isOpenCatlog={isOpenCatlog}>
            <CaretDown />
          </ArrowWraper>
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
        <FooterBox
          onClick={() => toggleList('ПОКУПЦЯМ')}
          isOpenForClients={isOpenForClients}
        >
          <FooterH2Styled>ПОКУПЦЯМ</FooterH2Styled>
          <ArrowWraper isOpenForClients={isOpenForClients}>
            <CaretDown />
          </ArrowWraper>
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
        <FooterBox
          onClick={() => toggleList('КОНТАКТИ')}
          isOpenContacts={isOpenContacts}
        >
          <FooterH2Styled>КОНТАКТИ</FooterH2Styled>
          <ArrowWraper isOpenContacts={isOpenContacts}>
            <CaretDown />
          </ArrowWraper>
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

        {screenWidth <= 767 && (
          <FooterBox
            onClick={() => toggleList('ПРО КОМПАНІЮ')}
            isOpenAboutUs={isOpenAboutUs}
          >
            <FooterH2Styled>ПРО КОМПАНІЮ</FooterH2Styled>
            <ArrowWraper isOpenAboutUs={isOpenAboutUs}>
              <CaretDown />
            </ArrowWraper>
          </FooterBox>
        )}

        {screenWidth <= 767 ? (
          <>
            <SocialListStyled>
              <li>
                <SocialLinkStyled href="http://instagram.com" target="_blank">
                  <InstagramIcon />
                </SocialLinkStyled>
              </li>
              <li>
                <SocialLinkStyled href="http://youtube.com" target="_blank">
                  <MdiYoutube />
                </SocialLinkStyled>
              </li>
              <li>
                <SocialLinkStyled href="http://facebook.com" target="_blank">
                  <FacebookSquare />
                </SocialLinkStyled>
              </li>
            </SocialListStyled>

            <ContactsList>
              <li>
                
                  
                  <FooterLinkStyled
                    href="mailto:clawspaws@gmail.com"
                    target="_blank"
                  > <EmailIcon />
                    Напишіть нам
                  </FooterLinkStyled>
                
              </li>
              <li>
                
                   <FooterLinkStyled
                    href="https://www.google.com/maps"
                    target="_blank"
                  > <PersonArmsSpread />
                    Доступність 
                  </FooterLinkStyled>
                
              </li>
            </ContactsList>

            <InfoList>
              <li>
                <InfoLink>Умови обслуговування</InfoLink>
              </li>
              <li>
              <InfoLink>Політика конфіденційност</InfoLink>
              </li>
              <li>
              <InfoLink>Доступність</InfoLink>
              </li>
            </InfoList>
            <LicenseLink>Усі права захищені 2023</LicenseLink>
          </>
        ) : (
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
        )}
      </FooterContainer>
    </FooterStyled>
  );
};
