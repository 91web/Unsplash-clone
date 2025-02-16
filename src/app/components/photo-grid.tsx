import Grid from "@mui/material/Grid2"; // ✅ Fixed Import
import Typography from "@mui/material/Typography";
import PhotoCard from "./photo-card";
import { getPhotos } from "../utils/unsplash";

export default async function PhotoGrid({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "african";

  try {
    const photos = await getPhotos(query);

    if (!photos || photos.length === 0) {
      return (
        <Typography align="center" sx={{ mt: 2 }}>
          No photos found. Try a different search term.
        </Typography>
      );
    }

    return (
      <Grid container spacing={2} className="photo-grid">
        {photos.map(
          (
            photo: {
              id: string;
              urls: { small: string; regular: string };
              user: { name: string };
              description?: string;
              alt_description?: string;
            },
            index: number
          ) => (
            <Grid
              size={{ xs: 12, sm: 4, md: 4, lg: 3 }}
              key={photo.id}
              className={`photo-item item-${index + 1}`}
            >
              <PhotoCard photo={photo} />
            </Grid>
          )
        )}
      </Grid>
    );
  } catch (error) {
    console.error("Error fetching photos:", error);
    return (
      <Typography align="center" sx={{ mt: 2, color: "red" }}>
        Failed to load photos. Please try again later.
      </Typography>
    );
  }
}
