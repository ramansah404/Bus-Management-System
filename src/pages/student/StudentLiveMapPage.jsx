import BusMap from '../../components/map/BusMap'
import { useApp } from '../../context/AppContext'

export default function StudentLiveMapPage() {
  const { buses, routes } = useApp()
  return <BusMap buses={buses} routes={routes} />
}
