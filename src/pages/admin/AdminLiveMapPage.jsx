import BusMap from '../../components/map/BusMap'
import { useApp } from '../../context/AppContext'

export default function AdminLiveMapPage() {
  const { buses, routes } = useApp()
  return <BusMap buses={buses} routes={routes} />
}
