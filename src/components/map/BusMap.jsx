import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import { serviceArea } from '../../data/demoData'
import { formatDateTime } from '../../utils/formatters'

const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export default function BusMap({ buses, routes }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-4 py-3">
        <h3 className="font-semibold text-slate-900">Live Map (Demo / Sample Data)</h3>
        <p className="text-xs text-slate-600">Demo service area around Vignan University, Guntur for MVP only.</p>
      </div>
      <MapContainer center={serviceArea.center} className="h-[380px] w-full" zoom={serviceArea.zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {routes.map((route) => (
          <Polyline key={route.id} color="#2563eb" positions={route.stops.map((stop) => stop.position)} weight={4} />
        ))}

        {routes.flatMap((route) =>
          route.stops.map((stop) => (
            <Marker icon={icon} key={stop.id} position={stop.position}>
              <Popup>{stop.name}</Popup>
            </Marker>
          )),
        )}

        {buses.map((bus) => (
          <Marker icon={icon} key={bus.id} position={bus.position}>
            <Popup>
              <div className="space-y-1 text-sm">
                <p className="font-semibold">{bus.number}</p>
                <p>Status: {bus.status}</p>
                <p>Next Stop: {bus.nextStop}</p>
                <p>Updated: {formatDateTime(bus.lastUpdated)}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
