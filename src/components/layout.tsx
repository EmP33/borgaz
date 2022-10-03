import { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import '../styles/layout.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
