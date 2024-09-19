"use client";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useCallback, useRef, useState } from "react";
import { mockTestImages } from "../constants";

interface IProps {
  defaultCenter: google.maps.LatLngLiteral;
}

const mockMarkers: google.maps.LatLngLiteral[] = [
  { lat: 42.503701480508234, lng: 27.470214576721176 },
  { lat: 42.514980749099045, lng: 27.458799095153793 },
  { lat: 42.5106785226839, lng: 27.47532150268553 },
  { lat: 42.50128218987002, lng: 27.467467994689926 },
];

export const Map = ({ defaultCenter }: IProps) => {
  const isZoomedAfterInitializationMap = useRef<boolean>(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [positionMarker, setPositionMarker] =
    useState<google.maps.LatLngLiteral | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API || "",
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(defaultCenter);
    mockMarkers.forEach((marker) => bounds.extend(marker));
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  //   TODO Задает зум после загрузки карты
  //   const onIdle = useCallback(() => {
  //     if (map) {
  //       if (!isZoomedAfterInitializationMap.current) {
  //           map.setZoom(15);
  //       }
  //       isZoomedAfterInitializationMap.current = true;
  //     }
  //   }, [map]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleChangeMarkerPosition = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const latLng = { lat: event.latLng?.lat(), lng: event.latLng?.lng() };

      setPositionMarker(latLng);
      map?.panTo(latLng);
    }
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "700px" }}
          center={defaultCenter}
          onLoad={onLoad}
          onUnmount={onUnmount}
          //  onIdle={onIdle}
          onClick={handleChangeMarkerPosition}
        >
          {positionMarker && (
            <Marker position={positionMarker} title={"Информация об иконке"} />
          )}
          <MarkerClusterer
            styles={[
              {
                height: 100,
                width: 100,
                url: mockTestImages.meleniko.src,
                textSize: 24,
                textColor: "#ffffff",
                fontWeight: "600",
                anchorText: [-10, 0],
              },
              {
                height: 100,
                width: 100,
                url: mockTestImages.meleniko.src,
                textSize: 24,
                textColor: "#000000",
                fontWeight: "400",
                anchorText: [-10, 0],
              },
            ]}
          >
            {(clusterer) => (
              <>
                {mockMarkers.map((coords, id) => (
                  <Marker
                    position={coords}
                    key={id}
                    icon={{
                      url: mockTestImages.nesebr.src,
                      scaledSize: new google.maps.Size(40, 40),
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(20, 40),
                    }}
                    clusterer={clusterer}
                  >
                    {id === 0 && (
                      <InfoWindow position={coords}>
                        <div className="">info</div>
                      </InfoWindow>
                    )}
                  </Marker>
                ))}
              </>
            )}
          </MarkerClusterer>
        </GoogleMap>
      ) : (
        <div className="flex h-[700px] w-full items-center justify-center bg-light text-3xl">
          Loading map...
        </div>
      )}
    </>
  );
};
