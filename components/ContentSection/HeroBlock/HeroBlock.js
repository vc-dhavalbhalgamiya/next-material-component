import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Button, Chip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { ProductHunt, Reddit, YouTube } from "../../../icons";
import Link from "next/link";
const HeroBlock = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirect="column"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}
      >
        <Box>
          <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
            <Box
              display="inline-flex"
              sx={{
                borderRadius: 6,
                py: 1.5,
                px: 2.5,
                mb: 6,
                width: "auto",
                alignItems: "center",
                border: "1px solid ",
                borderColor: "common.borderColor",
              }}
            >
              <Chip sx={{ backgroundColor: "common.borderColor", mr: 1 }} label="Chip Filled" />
              <Typography variant="body1" component="p">
                Lorem Ipsum is simply dummy text
              </Typography>
            </Box>
            <Typography
              component="h1"
              sx={{ typography: { md: "h4", xxs: "h4", xl: "h1" } }}
              fontWeight="bold"
            >
              We invest in the world’s potential
            </Typography>
            <Typography variant="body1" component="p" color="common.greyLight">
              Here at Flowbite we focus on markets where technology, innovation, and capital can
              unlock long-term value and drive economic growth.
            </Typography>
          </Box>
          <Box sx={{ py: 5, display: "flex", justifyContent: "center" }}>
            <Button variant="contained" sx={{ mx: 2 }}>
              Learn More <ArrowRightAltIcon sx={{ ml: 1 }} />
            </Button>
            <Button variant="outlined" sx={{ mx: 2 }}>
              <VideocamIcon sx={{ mr: 1 }} /> Watch Video
            </Button>
          </Box>
          <Typography
            sx={{ pt: 3, textAlign: "center" }}
            variant="body1"
            component="p"
            color="common.greyLight"
          >
            Featured in
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              pt: 3,
              flexDirection: { sm: "row", xxs: "column" },
              svg: { color: "grey.400" },
              a: { svg: { "&:hover": { color: "primary.main" } } },
            }}
          >
            <Link href="/">
              <Box sx={{ width: { lg: 200, xxs: 100 } }}>
                <YouTube />
              </Box>
            </Link>
            <Link href="/">
              <Box
                sx={{
                  width: { lg: 250, xxs: 150 },
                  mx: { sm: 4 },
                  py: { md: 0, xxs: 2 },
                }}
              >
                <ProductHunt />
              </Box>
            </Link>
            <Link href="/">
              <Box sx={{ width: { lg: 160, xxs: 100 } }}>
                <Reddit />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroBlock;
