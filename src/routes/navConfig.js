export const navByRole = {
  student: [
    { path: '/student/dashboard', label: 'Dashboard' },
    { path: '/student/my-bus', label: 'My Bus' },
    { path: '/student/my-route', label: 'My Route' },
    { path: '/student/live-map', label: 'Live Map' },
    { path: '/student/timetable', label: 'Timetable' },
    { path: '/student/notifications', label: 'Notifications' },
    { path: '/student/complaints', label: 'Complaints' },
    { path: '/student/profile', label: 'Profile' },
  ],
  driver: [
    { path: '/driver/dashboard', label: 'Dashboard' },
    { path: '/driver/my-bus', label: 'My Bus' },
    { path: '/driver/my-route', label: 'My Route' },
    { path: '/driver/trip', label: 'Trip' },
    { path: '/driver/profile', label: 'Profile' },
  ],
  admin: [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/students', label: 'Students' },
    { path: '/admin/drivers', label: 'Drivers' },
    { path: '/admin/buses', label: 'Buses' },
    { path: '/admin/routes', label: 'Routes' },
    { path: '/admin/stops', label: 'Stops' },
    { path: '/admin/schedules', label: 'Schedules' },
    { path: '/admin/assignments', label: 'Assignments' },
    { path: '/admin/complaints', label: 'Complaints' },
    { path: '/admin/notifications', label: 'Notifications' },
    { path: '/admin/live-map', label: 'Live Map' },
  ],
}

export const defaultDashboardByRole = {
  student: '/student/dashboard',
  driver: '/driver/dashboard',
  admin: '/admin/dashboard',
}
