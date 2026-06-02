"use client";

import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Waypoints data structure
export interface MapWaypoint {
  step: number;
  name: string;
  coords: [number, number];
  title: string;
  popupText: string;
}

export const waypoints: MapWaypoint[] = [
  {
    step: 1,
    name: "Al-Madinah al-Munawwarah",
    coords: [24.4672, 39.6111],
    title: "Origin: The Radiant City",
    popupText: "The ancestral cradle of the lineage. Tracing roots back to the Holy Prophet ﷺ, Imam Ali, and the early Imams of the Ahl al-Bayt (آلِ بیت)."
  },
  {
    step: 2,
    name: "Baghdad",
    coords: [33.3152, 44.3661],
    title: "Waypoint: Center of Islamic Scholarship",
    popupText: "The intellectual capital of the Abbasid caliphate. Generations of ancestors settled here to compile theological work and master Islamic jurisprudence."
  },
  {
    step: 3,
    name: "Uzbekistan",
    coords: [39.6542, 66.9597],
    title: "Waypoint: Overland Transit Route",
    popupText: "Overland migration path through Transoxiana (Transoxiana/Samarkand) bridging the Middle East with Central Asia and the subcontinent."
  },
  {
    step: 4,
    name: "Lahore",
    coords: [31.5204, 74.3587],
    title: "Waypoint: Early Subcontinent Entry",
    popupText: "A key gateway to the northern plains of India, representing the spiritual and physical entrance of the family's lineage to the subcontinent."
  },
  {
    step: 5,
    name: "Delhi, India",
    coords: [28.6139, 77.2090],
    title: "Waypoint: Seat of Judicial and Spiritual Authority",
    popupText: "The administrative heart of the Mughal Empire, where prominent ancestors like Qazi Syed Abdul Raheem Mufti served as royal jurists."
  },
  {
    step: 6,
    name: "Jaunpur",
    coords: [25.7464, 82.6837],
    title: "Waypoint: Pre-Bihar Settlement",
    popupText: "A prestigious historical center of Islamic scholarship in Uttar Pradesh, famously celebrated as the 'Shiraz of the East' (Shiraz-e-Hind)."
  },
  {
    step: 7,
    name: "Faridpur, Jehanabad, Bihar",
    coords: [25.2154, 84.9913],
    title: "Destination: The Ancestral Estate & Royal Jagir",
    popupText: "The permanent family seat established by Syed Muhammad Dawood under the imperial Farman-e-Shahi, serving as a center of local governance and Sufism."
  },
  {
    step: 8,
    name: "Makkah al-Mukarramah",
    coords: [21.3891, 39.8579],
    title: "Exile: Haji Shubrati's Spiritual Retreat",
    popupText: "A 15-year self-imposed exile and period of intense spiritual devotion in Makkah following Syed Mir Majid Ali's (Haji Shubrati) resistance in the 1857 Rebellion."
  },
  {
    step: 9,
    name: "Sadar Gali, Patna / Faridpur",
    coords: [25.5941, 85.1376],
    title: "Return: Continuation of the Legacy",
    popupText: "The return of Haji Shubrati and subsequent generations to Bihar (Patna/Faridpur), continuing the legal, scholarly, and spiritual records into the modern era."
  }
];

// Helper component to programmatically change map view with transitions
const ChangeMapView: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true, duration: 1.2 });
  }, [center, zoom, map]);
  return null;
};

interface MapWrapperProps {
  activeStep: number;
  onSelectWaypoint: (step: number) => void;
}

const MapWrapper: React.FC<MapWrapperProps> = ({ activeStep, onSelectWaypoint }) => {
  // Center map on Bihar initially [25.3, 85.0] as requested, or center to show entire route
  const [mapCenter, setMapCenter] = useState<[number, number]>([25.3, 85.0]);
  const [mapZoom, setMapZoom] = useState<number>(4);

  // Re-focus the map smoothly when the activeStep prop changes
  useEffect(() => {
    const activePoint = waypoints.find((w) => w.step === activeStep);
    if (activePoint) {
      setMapCenter(activePoint.coords);
      // Zoom in closer for specific waypoints
      setMapZoom(activeStep === 7 || activeStep === 9 ? 7 : 5);
    } else {
      // Zoom out to show full region
      setMapCenter([27.0, 62.0]);
      setMapZoom(4);
    }
  }, [activeStep]);

  // Create custom marker icons using L.divIcon to prevent broken Next.js image assets
  const getCustomIcon = (stepNumber: number) => {
    const isActive = activeStep === stepNumber;
    return L.divIcon({
      html: `
        <div class="relative flex items-center justify-center" style="transform: translate(0, 0);">
          ${isActive ? '<span class="absolute inline-flex h-8 w-8 rounded-full bg-[#C5A059] opacity-50 animate-ping"></span>' : ""}
          <div class="relative w-6 h-6 rounded-full border-2 flex items-center justify-center font-sans font-bold text-[10px] shadow-md transition-all duration-300 ${
            isActive 
              ? "bg-[#C5A059] border-[#E2C374] text-[#071624] scale-110" 
              : "bg-[#0d233a] border-[#C5A059]/60 text-[#FDFBF7] hover:border-[#C5A059]"
          }">
            ${stepNumber}
          </div>
        </div>
      `,
      className: "custom-leaflet-icon",
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12]
    });
  };

  // Compile coordinates for the Polyline
  const polylinePositions = waypoints.map((w) => w.coords);

  return (
    <div className="historical-map w-full h-full relative rounded-md overflow-hidden bg-cream-base/10 shadow-lg border border-gold-base/20">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        scrollWheelZoom={false}
        className="w-full h-full min-h-[400px] lg:min-h-[500px]"
      >
        <ChangeMapView center={mapCenter} zoom={mapZoom} />
        
        {/* Leaflet Tile Layer using CartoDB Positron for a clean base */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* Dash Gold Polyline Path along Waypoints */}
        <Polyline
          positions={polylinePositions}
          pathOptions={{
            color: "#C5A059",
            weight: 3,
            dashArray: "5, 10",
            opacity: 0.85
          }}
        />

        {/* Chronological Waypoint Markers */}
        {waypoints.map((point) => (
          <Marker
            key={point.step}
            position={point.coords}
            icon={getCustomIcon(point.step)}
            eventHandlers={{
              click: () => {
                onSelectWaypoint(point.step);
              }
            }}
          >
            <Popup closeButton={false}>
              <div className="p-1 font-sans text-stone-900">
                <div className="flex items-center gap-2 mb-1.5 border-b border-gold-base/20 pb-1">
                  <span className="w-4 h-4 rounded-full bg-lapis-base border border-gold-base flex items-center justify-center text-[9px] text-gold-light font-bold">
                    {point.step}
                  </span>
                  <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-lapis-base">
                    {point.name}
                  </h4>
                </div>
                <p className="text-[10px] uppercase font-bold text-gold-dark mb-1">
                  {point.title}
                </p>
                <p className="text-[11px] leading-relaxed text-stone-700 font-light italic">
                  {point.popupText}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
