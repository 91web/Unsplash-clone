"use client";

import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

interface PhotoCardProps {
  photo: {
    id: string;
    urls: { small: string; regular: string };
    user: { name: string };
    description?: string;
    alt_description?: string;
  };
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleModal = () => setOpen(!open);

  return (
    <>
      <Card onClick={toggleModal} sx={{ cursor: "pointer", height: "100%" }}>
        <CardMedia
          component="div"
          sx={{ height: 0, paddingTop: "100%", position: "relative" }}
        >
          <Image
            src={photo.urls.small || "/placeholder.svg"}
            alt={photo.alt_description || "Unsplash photo"}
            layout="fill"
            objectFit="cover"
          />
          <Box className="overlay">
            <Typography>{photo.user.name}</Typography>
          </Box>
        </CardMedia>
      </Card>
      <Dialog
        open={open}
        onClose={toggleModal}
        maxWidth="lg"
        fullWidth
      //  fullScreen={fullScreen}
      >
        <IconButton
          onClick={toggleModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#000",
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            p: 5,
            overflow: "hidden",
          }}
        >
          <Box sx={{ position: "relative", height: 500, width: 800 }}>
            <Image
              src={photo.urls.regular || "/placeholder.svg"}
              alt={photo.alt_description || "Unsplash photo"}
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography>{photo.user.name}</Typography>
          <Typography>
            {photo.description ||
              photo.alt_description ||
              "No description available"}
          </Typography>
        </Box>
      </Dialog>
    </>
  );
}
