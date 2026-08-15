export function formatDateTime(value) {
  return new Date(value).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export function getRoleLabel(role) {
  return role.charAt(0).toUpperCase() + role.slice(1)
}
