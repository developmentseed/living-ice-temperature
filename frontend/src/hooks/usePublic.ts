import { useQuery } from "@tanstack/react-query";
import { FeatureCollection } from "geojson";

export function useBasemap() {
  return useQuery({
    queryKey: ["basemap"],
    queryFn: () =>
      fetchPublic<FeatureCollection>("quantartica-simple-basemap.json"),
  });
}

export function useBoreholes() {
  return useQuery({
    queryKey: ["boreholes"],
    queryFn: () => fetchPublic<FeatureCollection>("boreholes.json"),
  });
}

async function fetchPublic<T>(file_name: string): Promise<T> {
  return await fetch(import.meta.env.BASE_URL + file_name).then((response) =>
    response.json(),
  );
}
