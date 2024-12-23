"use client";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  MarkerClusterer,
  InfoWindow,
  Libraries,
} from "@react-google-maps/api";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { IPropertyCard } from "@/shared/types/property";
import { MapInfoBlock } from "./ui/index";
import marker from "@/shared/assets/map/marker.png";
import cluster from "@/shared/assets/map/cluster.png";
import { cn } from "@/shared/helpers/cn";
import { OptionType } from "@/shared/types/ui";

export type GeocoderType = google.maps.GeocoderResponse["results"][number];

interface IProps {
  defaultCenter?: google.maps.LatLngLiteral;
  initialMarkerProperties?: IPropertyCard[];
  className?: string;
  onGetPosition?: (coords: google.maps.LatLngLiteral) => void;
  onGetFindedLocation?: (option: OptionType) => void;
  searchPlace?: string;
  setOptionsPlace?: (options: OptionType[]) => void;
  selectedPlace?: OptionType;
}

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API || "";
const libraries: Libraries = ["places"];

export const Map = ({
  defaultCenter,
  initialMarkerProperties,
  className,
  onGetPosition,
  onGetFindedLocation,
  searchPlace,
  setOptionsPlace,
  selectedPlace,
}: IProps) => {
  const isZoomedAfterInitializationMap = useRef<boolean>(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [servicePlaces, setServicePlaces] =
    useState<google.maps.places.AutocompleteService | null>(null);
  const [place, setPlace] = useState<google.maps.places.PlacesService | null>(
    null,
  );
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder | null>(null);
  const [positionMarker, setPositionMarker] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [activePropertyMarker, setActivePropertyMarker] =
    useState<google.maps.LatLngLiteral | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    const service = new window.google.maps.places.AutocompleteService();
    const place = new window.google.maps.places.PlacesService(map);
    const bounds = new window.google.maps.LatLngBounds(defaultCenter);
    const geocoder = new window.google.maps.Geocoder();
    initialMarkerProperties?.forEach((property) =>
      bounds.extend(property.location.coods),
    );
    map.fitBounds(bounds);

    setServicePlaces(service);
    setMap(map);
    setPlace(place);
    setGeocoder(geocoder);
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

  const handleChangePropertyMarker = (latLng: google.maps.LatLngLiteral) => {
    map?.panTo(latLng);
    setActivePropertyMarker(latLng);
    map?.setZoom(17);
  };

  const handleFindLocation = async (latLng: google.maps.LatLngLiteral) => {
    if (geocoder) {
      geocoder.geocode(
        { location: latLng, language: "ru" },
        (results, status) => {
          if (status === "OK" && results) {
            const infoGeo = results[0];
            setPositionMarker(latLng);
            map?.panTo(latLng);
            onGetFindedLocation?.({
              label: infoGeo.formatted_address,
              value: infoGeo.place_id,
            });
          }
        },
      );
    }
  };

  const handleSetMarkerPosition = (latLng: google.maps.LatLngLiteral) => {
    if (onGetPosition) {
      onGetPosition?.(latLng);
      setPositionMarker(latLng);
      map?.panTo(latLng);
    }
  };

  useEffect(() => {
    if (servicePlaces && setOptionsPlace) {
      servicePlaces.getPlacePredictions(
        {
          input: searchPlace || "",
          language: "ru",
        },
        (predictions, status) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            predictions
          ) {
            const preparedOptionsPlace: OptionType[] = predictions.map(
              (prediction) => ({
                label: prediction.description,
                value: prediction.place_id,
              }),
            );
            setOptionsPlace(preparedOptionsPlace);
          } else {
            setOptionsPlace([]);
          }
        },
      );
    }
  }, [searchPlace, servicePlaces]);

  useEffect(() => {
    if (selectedPlace && place) {
      place.getDetails(
        { placeId: selectedPlace.value as string, language: "ru" },
        (place, status) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            place?.geometry?.location
          ) {
            const location = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            setPositionMarker(location);
            map?.panTo(location);
          }
        },
      );
    }
  }, [selectedPlace, place]);

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
          onClick={generateLatLngPosition(
            onGetFindedLocation ? handleFindLocation : handleSetMarkerPosition,
          )}
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
