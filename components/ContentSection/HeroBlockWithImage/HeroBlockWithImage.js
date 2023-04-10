import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import VideocamIcon from "@mui/icons-material/Videocam";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import PhoneImage from "./../../../public/images/phone-mockup.png";
const HeroBlockWithImage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirect="column"
      justifyContent="center"
      sx={{ width: 1, height: "100vh" }}
    >
      <Box sx={{ maxWidth: 1, padding: "0 50px " }}>
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
                Payments tool for
                <br />
                software companies
              </Typography>
              <Typography sx={{ py: 2 }} component="p" variant="h5" color="common.greyLight">
                From checkout to global sales tax compliance, companies around the world use
                Flowbite to simplify their payment stack.
              </Typography>
              <Box sx={{ py: 5 }}>
                <Button variant="contained" sx={{ mr: 2 }}>
                  Learn More <ArrowRightAltIcon sx={{ ml: 1 }} />
                </Button>
                <Button variant="outlined" sx={{ mx: 2 }}>
                  <VideocamIcon sx={{ mr: 1 }} /> Watch Video
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xxs={0} sm={12} md={6} sx={{ display: { xxs: "none", md: "flex" } }}>
            <Box sx={{ width: 1, maxWidth: 1 }}>
              <Image src={PhoneImage} alt="img" width={450} height={450} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroBlockWithImage;
