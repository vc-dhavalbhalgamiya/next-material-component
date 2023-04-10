import {
  Footer,
  FooterWithNewsLetter,
  FooterWithSitemap,
  FooterWithSitemapAndSocial,
  Header,
} from "components";

function HomePage() {
  return (
    <>
      <Header />
      <Footer />
      <FooterWithNewsLetter />
      <FooterWithSitemap />
      <FooterWithSitemapAndSocial />
    </>
  );
}

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
