import mapboxgl from "mapbox-gl";
import React from "react";
import { BinData } from "./api";

export type BinContext = {
  bins: { [id: string]: BinData };
  selectedBins: string[];
  setSelectedBins: React.Dispatch<React.SetStateAction<string[]>>;
};

export type MapBoxContext = {
  mapBox: mapboxgl.Map | null;
  goto: (lng: number, lat: number) => void;
  navigate: (points: [number, number][]) => Promise<void>;
  initMapBox: (
    mapContainerRef: React.MutableRefObject<HTMLDivElement | null>
  ) => void;
};

export type MarkerData = {
  loc: string;
  lng: string;
  lat: string;
};
