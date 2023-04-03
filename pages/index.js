import { Home } from "../templates/Home";

function HomePage() {
  return <Home />;
}

export default HomePage;

// export async function getServerSideProps() {
//   try {
//     const flowerUrl = 'product-categories/flowers/products?page=1&per_page=4';
//     const {
//       data: { products },
//     } = await fetcher({
//       request: flowerUrl,
//       method: 'get',
//     });
//     return {
//       props: { products },
//     };
//   } catch (error) {
//     return {
//       props: { products: [] },
//     };
//   }
// }
HomePage.getLayout = function getLayout(page) {
  return { page };
};
