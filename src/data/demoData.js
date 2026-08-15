export const serviceArea = {
  center: [16.4444, 80.6225],
  zoom: 13,
  bounds: [
    [16.39, 80.58],
    [16.49, 80.67],
  ],
}

export const routes = [
  {
    id: 'route-1',
    name: 'Vignan North Corridor',
    stops: [
      { id: 's1', name: 'Vignan Main Gate', time: '08:00 AM', position: [16.4444, 80.6225] },
      { id: 's2', name: 'NRT Center', time: '08:10 AM', position: [16.451, 80.631] },
      { id: 's3', name: 'Lodge Center', time: '08:20 AM', position: [16.458, 80.64] },
      { id: 's4', name: 'Academic Block', time: '08:30 AM', position: [16.446, 80.624] },
    ],
  },
  {
    id: 'route-2',
    name: 'Vignan South Loop',
    stops: [
      { id: 's5', name: 'RTC Bus Stand', time: '08:05 AM', position: [16.432, 80.611] },
      { id: 's6', name: 'Market Junction', time: '08:15 AM', position: [16.425, 80.603] },
      { id: 's7', name: 'Hostel Gate', time: '08:28 AM', position: [16.44, 80.618] },
      { id: 's8', name: 'Vignan Main Gate', time: '08:40 AM', position: [16.4444, 80.6225] },
    ],
  },
]

export const buses = [
  {
    id: 'bus-1',
    number: 'VU-101',
    registrationNumber: 'AP07 BX 1201',
    driverId: 'driver-1',
    driverName: 'Ravi Kumar',
    routeId: 'route-1',
    capacity: 48,
    status: 'Inactive',
    position: [16.4444, 80.6225],
    lastUpdated: new Date().toISOString(),
    nextStop: 'Vignan Main Gate',
  },
  {
    id: 'bus-2',
    number: 'VU-205',
    registrationNumber: 'AP07 BX 2205',
    driverId: 'driver-2',
    driverName: 'Anitha Reddy',
    routeId: 'route-2',
    capacity: 52,
    status: 'Delayed',
    position: [16.432, 80.611],
    lastUpdated: new Date().toISOString(),
    nextStop: 'RTC Bus Stand',
  },
]

export const students = [
  {
    id: 'student-1',
    name: 'Arjun Varma',
    universityId: 'VU23CSE001',
    email: 'student@vignan.edu',
    assignedBusId: 'bus-1',
    routeId: 'route-1',
  },
  {
    id: 'student-2',
    name: 'Meghana Rao',
    universityId: 'VU23CSE014',
    email: 'meghana@vignan.edu',
    assignedBusId: 'bus-2',
    routeId: 'route-2',
  },
]

export const drivers = [
  {
    id: 'driver-1',
    name: 'Ravi Kumar',
    email: 'driver@vignan.edu',
    licenseNo: 'DL-AP-449911',
    assignedBusId: 'bus-1',
    routeId: 'route-1',
  },
  {
    id: 'driver-2',
    name: 'Anitha Reddy',
    email: 'anitha.driver@vignan.edu',
    licenseNo: 'DL-AP-772299',
    assignedBusId: 'bus-2',
    routeId: 'route-2',
  },
]

export const schedules = [
  { id: 'sc-1', routeId: 'route-1', departure: '08:00 AM', arrival: '08:35 AM', days: 'Mon-Sat' },
  { id: 'sc-2', routeId: 'route-2', departure: '08:05 AM', arrival: '08:45 AM', days: 'Mon-Sat' },
]

export const trips = [
  { id: 'trip-1', busId: 'bus-1', routeId: 'route-1', status: 'Scheduled' },
  { id: 'trip-2', busId: 'bus-2', routeId: 'route-2', status: 'In Progress' },
]

export const initialNotifications = [
  {
    id: 'n1',
    title: 'Bus trip started',
    message: 'VU-205 has started and is currently on Vignan South Loop.',
    audience: 'all',
    readBy: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'n2',
    title: 'Important transport announcement',
    message: 'Carry your university ID while boarding the bus.',
    audience: 'student',
    readBy: [],
    createdAt: new Date().toISOString(),
  },
]

export const initialComplaints = [
  {
    id: 'c1',
    studentId: 'student-1',
    category: 'Cleanliness',
    description: 'Seats need cleaning before morning trip.',
    status: 'In Review',
    resolutionNote: '',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'c2',
    studentId: 'student-2',
    category: 'Delay',
    description: 'Bus reached stop 10 minutes late yesterday.',
    status: 'Resolved',
    resolutionNote: 'Adjusted departure timing and informed driver.',
    createdAt: new Date().toISOString(),
  },
]

export const users = [
  {
    id: 'student-1',
    role: 'student',
    identifier: 'student@vignan.edu',
    password: 'student123',
    displayName: 'Arjun Varma',
  },
  {
    id: 'driver-1',
    role: 'driver',
    identifier: 'driver@vignan.edu',
    password: 'driver123',
    displayName: 'Ravi Kumar',
  },
  {
    id: 'admin-1',
    role: 'admin',
    identifier: 'admin@vignan.edu',
    password: 'admin123',
    displayName: 'Transport Admin',
  },
]
