import  Grid from "@mui/material/Grid2";
import Skeleton  from "@mui/material/Skeleton";

export default function PhotoGridSkeleton() {
  return (
    <Grid container spacing={2} className="photo-grid">
      {[...Array(8)].map((_, index) => (
        <Grid
      
          size={{xs:12, sm:6, md:4,lg:3}}
          key={index}
          className={`photo-item item-${index + 1}`}
        >
          <Skeleton
            variant="rectangular"
            height={0}
            sx={{ paddingTop: "75%" }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
