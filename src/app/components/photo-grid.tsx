"use client"; 
import { useSearchParams } from "next/navigation";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import PhotoCard from "./photo-card";
import { getPhotos } from "../utils/unsplash";
import { useEffect, useState } from "react";

type Photo = {
  id: string;
  urls: { small: string; regular: string };
  user: { name: string };
  description?: string;
  alt_description?: string;
};

export default function PhotoGrid() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "african";
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await getPhotos(query);
        setPhotos(data);
      } catch (error) {
        console.error("Failed to fetch photos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [query]);

  if (loading) {
    return <Typography align="center">Loading...</Typography>;
  }

  if (!photos.length) {
    return (
      <Typography align="center" sx={{ mt: 2 }}>
        No photos found. Try a different search term.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} className="photo-grid">
      {photos.map((photo: Photo, index: number) => (
        <Grid
          
          key={photo.id}
          size={{ xs: 12, sm: 4, md: 4, lg: 3 }}
          className={`photo-item item-${index + 1}`}
        >
          <PhotoCard photo={photo} />
        </Grid>
      ))}
    </Grid>
  );
}