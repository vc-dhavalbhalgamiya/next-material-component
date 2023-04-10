import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const pages = [
  { title: "about", path: "/about" },
  { title: "Careers", path: "/careers" },
  { title: "Brand Center", path: "/brand-center" },
  { title: "Blog", path: "/blog" },
];
const helpCenter = [
  { title: "Discord Server", path: "/discover" },
  { title: "Twitter", path: "/twitter" },
  { title: "facebook", path: "/facebook " },
  { title: "Contact us ", path: "/contact-us" },
];

const legal = [
  { title: "Privacy Policy", path: "/privacy" },
  { title: "Licensing", path: "/licensing" },
];
const download = [
  { title: "ios", path: "/ios" },
  { title: "android", path: "/android" },
  { title: "windows", path: "/windows" },
  { title: "macOs", path: "/mac-os" },
];
const FooterWithSitemapAndSocial = () => {
  return (
    <Box sx={{ py: 5, borderBottom: "1px solid" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3.2}>
            <Box>
              <Box sx={{ a: { textDecoration: "none" } }}>
                <Link href="/">
                  <Box display="flex" alignItems="center" justifyContent="flex-start">
                    <Image
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                      alt="logo"
                      width={40}
                      height={40}
                    />
                    <Typography sx={{ ml: { xs: 1, sm: 2 } }} variant="h6">
                      Flowbite
                    </Typography>
                  </Box>
                </Link>
              </Box>
              <Typography
                sx={{
                  textAlign: "left",
                  pt: 2,
                  pb: 3,
                  color: "grey.600",
                }}
                variant="body1"
              >
                Flowbite is a open-source library of over 400+ web components and interactive
                elements built with the utility classes from Tailwind CSS.
              </Typography>
              <Box
                display="flex"
                sx={{
                  justifyContent: { xs: "flex-start" },
                  a: {
                    width: 30,
                    mx: 1,
                    transition: "all ease 0.2s",
                    textDecoration: "none",
                    color: "grey.400",
                    "&:hover": { color: "primary.dark" },
                  },
                }}
                alignItems="center"
              >
                <Link href="/">
                  <FacebookIcon />
                </Link>
                <Link href="/">
                  <TwitterIcon />
                </Link>
                <Link href="/">
                  <GoogleIcon />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2.2}>
            <Typography
              sx={{ textAlign: "left", fontWeight: "bold", mb: 1.5 }}
              variant="body1"
              color="primary.main"
            >
              COMPANY
            </Typography>
            <Box sx={{ a: { textDecoration: "none", textAlign: "left" } }}>
              {pages.map((page) => (
                <Box
                  key={page.title}
                  sx={{
                    mb: 1,
                    a: {
                      transition: "all ease 0.2s",
                      textDecoration: "none",
                      color: "grey.400",
                      "&:hover": { color: "primary.dark" },
                    },
                  }}
                >
                  <Link href={page.path}>
                    <Typography sx={{ textTransform: "capitalize" }} variant="body1">
                      {page.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2.2}>
            <Typography
              sx={{ textAlign: "left", fontWeight: "bold", mb: 1.5 }}
              variant="body1"
              color="primary.main"
            >
              Help Center
            </Typography>
            <Box sx={{ a: { textDecoration: "none", textAlign: "left" } }}>
              {helpCenter.map((page) => (
                <Box
                  key={page.title}
                  sx={{
                    mb: 1,
                    a: {
                      transition: "all ease 0.2s",
                      textDecoration: "none",
                      color: "grey.400",
                      "&:hover": { color: "primary.dark" },
                    },
                  }}
                >
                  <Link href={page.path}>
                    <Typography sx={{ textTransform: "capitalize" }} variant="body1">
                      {page.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2.2}>
            <Typography
              sx={{ textAlign: "left", fontWeight: "bold", mb: 1.5 }}
              variant="body1"
              color="primary.main"
            >
              LEGAL
            </Typography>
            <Box sx={{ a: { textDecoration: "none", textAlign: "left" } }}>
              {legal.map((page) => (
                <Box
                  sx={{
                    mb: 1,
                    a: {
                      transition: "all ease 0.2s",
                      textDecoration: "none",
                      color: "grey.400",
                      "&:hover": { color: "primary.dark" },
                    },
                  }}
                  key={page.title}
                >
                  <Link href={page.path}>
                    <Typography sx={{ textTransform: "capitalize" }} variant="body1">
                      {page.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2.2}>
            <Typography
              sx={{ textAlign: "left", fontWeight: "bold", mb: 1.5 }}
              variant="body1"
              color="primary.main"
            >
              Download
            </Typography>
            <Box sx={{ a: { textDecoration: "none", textAlign: "left" } }}>
              {download.map((page) => (
                <Box
                  sx={{
                    mb: 1,
                    a: {
                      transition: "all ease 0.2s",
                      textDecoration: "none",
                      color: "grey.400",
                      "&:hover": { color: "primary.dark" },
                    },
                  }}
                  key={page.title}
                >
                  <Link href={page.path}>
                    <Typography sx={{ textTransform: "capitalize" }} variant="body1">
                      {page.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterWithSitemapAndSocial;
