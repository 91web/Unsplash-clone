import { Suspense } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchBar from "./components/search-bar";
import PhotoGrid from "./components/photo-grid";
import PhotoGridSkeleton from "./components/photo-grid-skeleton";

export default function Home() {
  return (
    <main>
      <Box
        className="hero"
        sx={{ py: { xs: 4, md: 6 }, mb: { xs: -2, md: -4 } }}
      >
        <Container maxWidth="lg">
          <Box mb={2}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                textAlign: "center",
              }}
            >
              Unsplash Clone
            </Typography>
          </Box>
          <SearchBar />
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
        <Suspense fallback={<PhotoGridSkeleton />}>
          <PhotoGrid />
        </Suspense>
      </Container>
    </main>
  );
}
