export const startAction = (resourse, type) => {
  return () => ({
    type: `${resourse}_${type}_START`,
  })
}

export const successAction = (resourse, type) => {
  return (payload) => ({
    type: `${resourse}_${type}_SUCCESS`,
    payload,
  })
}

export const failureAction = (resourse, type) => {
  return (payload) => ({
    type: `${resourse}_${type}_FAILURE`,
    payload,
  })
}
