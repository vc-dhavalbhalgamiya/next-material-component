import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import MarketingUi from "../../../public/images/marketing-ui.png";
const ContentSectionWithImages = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ textAlign: "left", height: 1 }}
          >
            <Typography
              component="h1"
              variant="h3"
              sx={{
                typography: { md: "h4", xxs: "h5", xl: "h3", fontWeight: "900" },
              }}
            >
              We didn't reinvent the wheel
            </Typography>
            <Typography sx={{ py: 2 }} component="p" variant="body1" color="common.greyLight">
              We are strategists, designers and developers. Innovators and problem solvers. Small
              enough to be simple and quick, but big enough to deliver the scope you want at the
              pace you need. Small enough to be simple and quick, but big enough to deliver the
              scope you want at the pace you need.
              <br />
              We are strategists, designers and developers. Innovators and problem solvers. Small
              enough to be simple and quick.
            </Typography>
          </Box>
        </Grid>
        <Grid item xxs={12} sm={12} md={6} alignItems="center" justifyContent="center">
          <Box
            sx={{
              position: "relative",
              width: 1,
              maxWidth: { xxs: 250, md: 1 },
              margin: "0 auto",
              height: { xxs: 350, md: 550 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 60,
                width: "50%",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Image src={MarketingUi} alt="img" width={250} height={350} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                borderRadius: "20px",
                left: "45%",
                width: "50%",
                overflow: "hidden",
                top: 140,
              }}
            >
              <Image src={MarketingUi} alt="img" width={250} height={350} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentSectionWithImages;
