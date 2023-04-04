import { Stack } from "@mui/material";

function HomePage() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      Home Page
    </Stack>
  );
}

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
