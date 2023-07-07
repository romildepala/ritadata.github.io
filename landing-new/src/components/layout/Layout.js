import {Header} from './Header';
import {Footer} from './Footer';

export const Layout = ({children, ...props}) => {
  return (
    <>
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
};
