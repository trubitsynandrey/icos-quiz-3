export const sendGoal = (name: string, params?: unknown) => {
  setTimeout(() => {
    window.ym(94470468, 'reachGoal', name, params)
  }, 2000)
}
