import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: "#f5f5f5",
       borderTop: "1px solid #e0e0e0",
        mt:5
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="textSecondary">
            &copy; 2025 Unsplash Clone. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="body2" color="textSecondary">
              Phone: 081-4911-6211
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email:{" "}
              <Link
                href="mailto:Yusuf.itexpert@gmail.com"
                color="inherit"
                underline="hover"
              >
                Yusuf.itexpert@gmail.com
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
