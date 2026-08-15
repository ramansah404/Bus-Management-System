import { users } from '../data/demoData'
import { STORAGE_KEYS } from './storageKeys'

export function getSavedAuth() {
  const raw = localStorage.getItem(STORAGE_KEYS.auth)
  if (!raw) return null

  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function loginWithMock({ role, identifier, password }) {
  const user = users.find(
    (entry) =>
      entry.role === role &&
      entry.identifier.toLowerCase() === identifier.toLowerCase().trim() &&
      entry.password === password,
  )

  if (!user) {
    return { success: false, message: 'Invalid role or credentials for demo login.' }
  }

  const auth = {
    isLoggedIn: true,
    role: user.role,
    userId: user.id,
    name: user.displayName,
    identifier: user.identifier,
    loggedInAt: new Date().toISOString(),
  }

  localStorage.setItem(STORAGE_KEYS.auth, JSON.stringify(auth))
  return { success: true, data: auth }
}

export function logoutMock() {
  localStorage.removeItem(STORAGE_KEYS.auth)
}
