"use client";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useCallback, useRef, useState } from "react";
import { IPropertyCard } from "@/shared/types/property";
import { MapInfoBlock } from "./mapInfoBlock";
import marker from "@/shared/assets/map/marker.png";
import cluster from "@/shared/assets/map/cluster.png";
import { cn } from "@/shared/helpers/cn";

interface IProps {
  defaultCenter?: google.maps.LatLngLiteral;
  initialMarkerProperties?: IPropertyCard[];
  className?: string;
  handlerSetPosition?: (coords: google.maps.LatLngLiteral) => void;
  isViewMarkerAfterSetPosition?: boolean;
}

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API || "";

export const Map = ({
  defaultCenter,
  initialMarkerProperties,
  className,
  isViewMarkerAfterSetPosition,
  handlerSetPosition,
}: IProps) => {
  const isZoomedAfterInitializationMap = useRef<boolean>(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [positionMarker, setPositionMarker] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [activePropertyMarker, setActivePropertyMarker] =
    useState<google.maps.LatLngLiteral | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(defaultCenter);
    initialMarkerProperties?.forEach((property) =>
      bounds.extend(property.location.coods),
    );
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  //   TODO Задает зум после загрузки карты
  const onIdle = useCallback(() => {
    if (map) {
      if (!isZoomedAfterInitializationMap.current) {
        map.setZoom(15);
      }
      isZoomedAfterInitializationMap.current = true;
    }
  }, [map]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const generateLatLngPosition = (
    handler: (coords: google.maps.LatLngLiteral) => void,
  ) => {
    return (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        const latLng = { lat: event.latLng?.lat(), lng: event.latLng?.lng() };
        handler(latLng);
      }
    };
  };

  const getInfoPosition = async (
    latLng: google.maps.LatLngLiteral,
  ): Promise<google.maps.GeocoderResponse> => {
    const latLngString = `${latLng.lat},${latLng.lng}`;

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLngString}&key=${apiKey}&language=ru`,
    );

    return await response.json();
  };

  const handleClickMarker = async (latLng: google.maps.LatLngLiteral) => {
    map?.panTo(latLng);
    // const info = await getInfoPosition(latLng);
    // console.log(info.results);
  };

  const handleChangePropertyMarker = (latLng: google.maps.LatLngLiteral) => {
    map?.panTo(latLng);
    setActivePropertyMarker(latLng);
    map?.setZoom(17);
  };

  const handleSetMarkerPosition = (latLng: google.maps.LatLngLiteral) => {
    if (handlerSetPosition) {
      map?.panTo(latLng);
      handlerSetPosition(latLng);
    }
    if (isViewMarkerAfterSetPosition) {
      setPositionMarker(latLng);
    }
  };

  return (
    <div
      className={cn(
        "flex h-[700px] w-full items-center justify-center bg-light text-3xl max-md:h-[600px] dark:bg-gray-second",
        className,
      )}
    >
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={defaultCenter}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onIdle={onIdle}
          onClick={generateLatLngPosition(handleSetMarkerPosition)}
        >
          {positionMarker && (
            <Marker
              position={positionMarker}
              icon={{
                url: marker.src,
                scaledSize: new google.maps.Size(60, 60),
              }}
              title={"Информация об иконке"}
            />
          )}
          {initialMarkerProperties && (
            <MarkerClusterer
              styles={[
                {
                  height: 80,
                  width: 80,
                  url: cluster.src,
                  textSize: 36,
                  textColor: "#ffffff",
                  fontWeight: "600",
                  anchorText: [0, 0],
                },
              ]}
            >
              {(clusterer) => (
                <>
                  {initialMarkerProperties.map((property, id) => (
                    <Marker
                      position={property.location.coods}
                      key={id}
                      icon={{
                        url: marker.src,
                        scaledSize: new google.maps.Size(60, 60),
                      }}
                      clusterer={clusterer}
                      onClick={generateLatLngPosition(
                        handleChangePropertyMarker,
                      )}
                    >
                      {activePropertyMarker?.lat ===
                        property.location.coods.lat &&
                        activePropertyMarker?.lng ===
                          property.location.coods.lng && (
                          <InfoWindow
                            position={property.location.coods}
                            onCloseClick={() => setActivePropertyMarker(null)}
                            options={{ maxWidth: 600 }}
                          >
                            <MapInfoBlock property={property} />
                          </InfoWindow>
                        )}
                    </Marker>
                  ))}
                </>
              )}
            </MarkerClusterer>
          )}
        </GoogleMap>
      ) : (
        <>Loading map...</>
      )}
    </div>
  );
};
