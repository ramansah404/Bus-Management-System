import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  buses as initialBuses,
  drivers,
  initialComplaints,
  initialNotifications,
  routes,
  schedules,
  students,
} from '../data/demoData'
import { getSavedAuth, loginWithMock, logoutMock } from '../services/authService'
import { STORAGE_KEYS } from '../services/storageKeys'

const defaultTrip = { active: false, status: 'Trip Not Started', busId: 'bus-1', progress: 0 }

const AppContext = createContext(null)

function parseStorage(key, fallback) {
  const raw = localStorage.getItem(key)
  if (!raw) return fallback
  try {
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function AppProvider({ children }) {
  const [auth, setAuth] = useState(() => getSavedAuth())
  const [buses, setBuses] = useState(initialBuses)
  const [trip, setTrip] = useState(() => parseStorage(STORAGE_KEYS.trip, defaultTrip))
  const [notifications, setNotifications] = useState(() =>
    parseStorage(STORAGE_KEYS.notifications, initialNotifications),
  )
  const [complaints, setComplaints] = useState(() => parseStorage(STORAGE_KEYS.complaints, initialComplaints))

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.notifications, JSON.stringify(notifications))
  }, [notifications])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.complaints, JSON.stringify(complaints))
  }, [complaints])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.trip, JSON.stringify(trip))
  }, [trip])

  useEffect(() => {
    if (!trip.active) return undefined

    const route = routes.find((entry) => entry.id === 'route-1')
    if (!route) return undefined

    const timer = window.setInterval(() => {
      setTrip((prev) => {
        const nextProgress = (prev.progress + 1) % route.stops.length
        const currentStop = route.stops[nextProgress]
        const nextStop = route.stops[(nextProgress + 1) % route.stops.length]

        setBuses((currentBuses) =>
          currentBuses.map((bus) =>
            bus.id === prev.busId
              ? {
                  ...bus,
                  status: 'Active',
                  position: currentStop.position,
                  nextStop: nextStop.name,
                  lastUpdated: new Date().toISOString(),
                }
              : bus,
          ),
        )

        return {
          ...prev,
          progress: nextProgress,
          status: 'Trip Active',
        }
      })
    }, 5000)

    return () => window.clearInterval(timer)
  }, [trip.active])

  const unreadCount = useMemo(
    () => notifications.filter((item) => !item.readBy.includes(auth?.userId)).length,
    [auth?.userId, notifications],
  )

  const student = students.find((item) => item.id === auth?.userId) ?? students[0]
  const driver = drivers.find((item) => item.id === auth?.userId) ?? drivers[0]

  const roleBusId = auth?.role === 'student' ? student.assignedBusId : driver.assignedBusId
  const currentBus = buses.find((item) => item.id === roleBusId) ?? buses[0]
  const currentRoute = routes.find((item) => item.id === currentBus.routeId) ?? routes[0]

  const login = (credentials) => {
    const result = loginWithMock(credentials)
    if (result.success) setAuth(result.data)
    return result
  }

  const logout = () => {
    logoutMock()
    setAuth(null)
  }

  const startTrip = () => {
    setTrip((prev) => ({ ...prev, active: true, status: 'Trip Active', busId: 'bus-1' }))
    setNotifications((prev) => [
      {
        id: `n-${Date.now()}`,
        title: 'Bus trip started',
        message: 'VU-101 is now active on Vignan North Corridor.',
        audience: 'all',
        readBy: [],
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ])
  }

  const endTrip = () => {
    setTrip((prev) => ({ ...prev, active: false, status: 'Trip Completed' }))
    setBuses((currentBuses) =>
      currentBuses.map((bus) =>
        bus.id === 'bus-1' ? { ...bus, status: 'Completed', lastUpdated: new Date().toISOString() } : bus,
      ),
    )
  }

  const markNotificationAsRead = (id) => {
    if (!auth) return
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id && !item.readBy.includes(auth.userId)
          ? { ...item, readBy: [...item.readBy, auth.userId] }
          : item,
      ),
    )
  }

  const addComplaint = ({ category, description }) => {
    if (!student) return
    setComplaints((prev) => [
      {
        id: `c-${Date.now()}`,
        studentId: student.id,
        category,
        description,
        status: 'Pending',
        resolutionNote: '',
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ])
  }

  const updateComplaint = ({ id, status, resolutionNote }) => {
    setComplaints((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status, resolutionNote: resolutionNote ?? '' } : item)),
    )
  }

  const publishNotification = ({ title, message, audience }) => {
    setNotifications((prev) => [
      {
        id: `n-${Date.now()}`,
        title,
        message,
        audience,
        readBy: [],
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ])
  }

  const value = {
    auth,
    login,
    logout,
    buses,
    routes,
    schedules,
    students,
    drivers,
    notifications,
    complaints,
    trip,
    unreadCount,
    currentBus,
    currentRoute,
    student,
    driver,
    startTrip,
    endTrip,
    markNotificationAsRead,
    addComplaint,
    updateComplaint,
    publishNotification,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
