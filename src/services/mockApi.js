import {
  buses,
  drivers,
  initialComplaints,
  initialNotifications,
  routes,
  schedules,
  students,
  trips,
} from '../data/demoData'

export async function fetchDashboardData() {
  return {
    students,
    drivers,
    buses,
    routes,
    schedules,
    trips,
  }
}

export async function fetchNotifications() {
  return initialNotifications
}

export async function fetchComplaints() {
  return initialComplaints
}
