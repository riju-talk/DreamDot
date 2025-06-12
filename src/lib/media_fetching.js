import { getCldVideoUrl } from "next-cloudinary";

export async function getAllVideoLanding() {
  const names = [
    "Pages/car_in_dessert",
    "Pages/reading_in_library",
    "Pages/morning_cup_coffee",
    "Pages/code_on_desktop",
  ];

  // Generate video URLs using next-cloudinary
  const videoUrls = names.map((video) =>
    getCldVideoUrl({
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      resourceType: "video",
      src: video
    })
  );

  return videoUrls; // Return an array of video URLs
}

