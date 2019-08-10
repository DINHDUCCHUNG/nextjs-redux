const initState = []

const Activity = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_ACTIVITY':
      return initState
    case 'FETCH_ACTIVITY_ACTIVITY_SUCCESS':
      return action.data
    default:
      return state
  }
}

export default Activity
