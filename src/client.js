import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "dusmwi4r",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25"
});