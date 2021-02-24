import GlobalStyle from '../styles/global';

// eslint-disable-next-line react/prop-types
const MyApp: any = ({ Component, pageProps }): any => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
