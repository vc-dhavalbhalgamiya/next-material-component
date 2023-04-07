import Box from "@mui/material/Box";
import { HeroBlock, HeroBlockWithImage } from "components";

function ContentPage() {
  return (
    <>
      {" "}
      <Box
        display="flex"
        alignItems="center"
        flexDirect="column"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}
      >
        <HeroBlock />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirect="column"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}
      >
        {/* <HeroBlockWithImage /> */}
      </Box>
    </>
  );
}

export default ContentPage;
ContentPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
