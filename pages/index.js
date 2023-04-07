import { Footer } from "components";

function HomePage() {
  return (
    <>
      <Footer />
    </>
  );
}

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
