export const sendGoal = (name: string, params?: unknown) => {
  setTimeout(() => {
    window.ym(94222395, 'reachGoal', name, params)
  }, 2000)
}
