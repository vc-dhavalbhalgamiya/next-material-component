import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const pages = [
    { title: "about", path: "/about" },
    { title: "Premium", path: "/premium" },
    { title: "Campaigns", path: "/campaigns" },
    { title: "Blog", path: "/blog" },
    { title: "Affiliate Program", path: "/affiliate-program" },
    { title: "FAQs", path: "/faq" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <>
      <Box sx={{ py: 5, borderBottom: "1px solid", borderColor: "borderColor" }}>
        <Box sx={{ a: { textDecoration: "none" } }}>
          <Link href="/">
            <Box display="flex" alignItems="center" justifyContent="center">
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
            ml: { xs: 1, sm: 2 },
            pt: 2,
            pb: 3,
            color: "common.greyLight",
            textAlign: "center",
          }}
          variant="body1"
        >
          Open-source library of over 400+ web components and interactive elements built for better
          web.
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            flexWrap: "wrap",
            a: {
              transition: "all ease 0.2s",
              textDecoration: "none",
              color: "primary.main",
              "&:hover": { color: "primary.dark" },
            },
          }}
        >
          {pages.map((page) => (
            <Link href={page.path} key={page.title}>
              <Typography
                sx={{ ml: { xs: 1, sm: 2, textTransform: "capitalize" } }}
                variant="body1"
              >
                {page.title}
              </Typography>
            </Link>
          ))}
        </Box>

        <Typography
          sx={{
            ml: { xs: 1, sm: 2 },
            pt: 2,
            pb: 3,
            color: "common.greyLight",
            textAlign: "center",
          }}
          variant="subtitle1"
        >
          © 2021-2022 Flowbite™. All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
