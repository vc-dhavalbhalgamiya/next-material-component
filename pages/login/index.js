import Box from "@mui/material/Box";
import { LoginForm, LoginFormWithSocial, LoginWithSocial } from "components";
import Image from "next/image";
import { Container } from "@mui/material";
import LoginWithIllustration from "components/Login/LoginWithIllustration/LoginWithIllustration";

function LoginPage() {
  return (
    <>
      <Container>
        {/* Login 01 Form start  */}

        <LoginForm />

        {/* Login 01 Form  end

  {/* Login 02 Form  start */}

        <LoginWithSocial />

        {/* Login 02 Form  end */}
        {/* Login 03 Form  start */}
        <LoginWithIllustration />

        {/* Login 03 Form  end */}
      </Container>
    </>
  );
}

export default LoginPage;
LoginPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
