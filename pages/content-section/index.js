import Box from "@mui/material/Box";
import {
  ContentSectionWithImages,
  HeroBlock,
  HeroBlockWithImage,
  IllustrationWithEmailSignup,
  SocialProofContent,
} from "components";

function ContentPage() {
  return (
    <>
      <HeroBlock />
      <HeroBlockWithImage />
      <IllustrationWithEmailSignup />
      <SocialProofContent />
      <ContentSectionWithImages />
    </>
  );
}

export default ContentPage;
ContentPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
