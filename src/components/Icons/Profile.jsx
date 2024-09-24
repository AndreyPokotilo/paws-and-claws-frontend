import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { SvgStyled } from './SvgStyled.styled';

export const ProfileIcon = () => {
  const screenWidth = useWindowSize();
  return (
    <SvgStyled
      xmlns="http://www.w3.org/2000/svg"
      width={screenWidth >= 768 ? "40" : "30"}
      height={screenWidth >= 768 ? "40" : "30"}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M31.89 30.446C30.0323 27.2359 27.1159 24.9834 23.7271 24.0281C25.3747 23.1906 26.6921 21.8226 27.4671 20.1448C28.2421 18.4669 28.4293 16.5769 27.9987 14.7796C27.5682 12.9823 26.5448 11.3824 25.0936 10.2378C23.6425 9.09328 21.8482 8.47083 20 8.47083C18.1518 8.47083 16.3575 9.09328 14.9064 10.2378C13.4552 11.3824 12.4318 12.9823 12.0013 14.7796C11.5707 16.5769 11.7579 18.4669 12.5329 20.1448C13.3079 21.8226 14.6253 23.1906 16.2729 24.0281C12.8841 24.9822 9.96774 27.2347 8.11004 30.446C8.05903 30.5262 8.02478 30.616 8.00935 30.7098C7.99392 30.8036 7.99762 30.8996 8.02024 30.992C8.04286 31.0843 8.08393 31.1711 8.14098 31.2472C8.19803 31.3233 8.26987 31.387 8.35219 31.4346C8.43451 31.4822 8.52561 31.5126 8.62 31.5241C8.71439 31.5356 8.81012 31.5278 8.90144 31.5013C8.99276 31.4748 9.07777 31.4301 9.15137 31.3699C9.22497 31.3097 9.28563 31.2353 9.3297 31.151C11.5869 27.2511 15.5749 24.9234 20 24.9234C24.4251 24.9234 28.4131 27.2511 30.6703 31.151C30.7144 31.2353 30.775 31.3097 30.8486 31.3699C30.9222 31.4301 31.0072 31.4748 31.0986 31.5013C31.1899 31.5278 31.2856 31.5356 31.38 31.5241C31.4744 31.5126 31.5655 31.4822 31.6478 31.4346C31.7301 31.387 31.802 31.3233 31.859 31.2472C31.9161 31.1711 31.9571 31.0843 31.9798 30.992C32.0024 30.8996 32.0061 30.8036 31.9907 30.7098C31.9752 30.616 31.941 30.5262 31.89 30.446ZM13.1849 16.6983C13.1849 15.3505 13.5846 14.0328 14.3335 12.9121C15.0823 11.7914 16.1467 10.9179 17.392 10.402C18.6373 9.88622 20.0076 9.75126 21.3296 10.0142C22.6516 10.2772 23.8659 10.9263 24.819 11.8794C25.7721 12.8325 26.4212 14.0468 26.6841 15.3688C26.9471 16.6908 26.8121 18.0611 26.2963 19.3064C25.7805 20.5517 24.907 21.616 23.7863 22.3649C22.6655 23.1137 21.3479 23.5134 20 23.5134C18.1932 23.5112 16.461 22.7925 15.1834 21.5149C13.9058 20.2373 13.1871 18.5051 13.1849 16.6983Z"
        fill=""
      />
    </SvgStyled>
  );
};