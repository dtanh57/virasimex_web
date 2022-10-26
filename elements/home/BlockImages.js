import { ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function BlockImages({ data }) {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <ImageList
        sx={{
          width: { xs: "100%", md: "80%" },
          alignSelf: "center",
          height: "auto",
        }}
        variant="quilted"
        cols={4}
        rowHeight={200}
      >
        {data.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <Image
              {...srcset(item.img, 200, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              layout="fill"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
