const initState = []

const ActivityOrder = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_ACTIVITY_ORDER':
      return initState
    case 'FETCH_ACTIVITY_ORDER_ACTIVITY_ORDER_SUCCESS':
      return action.data
    default:
      return state
  }
}

export default ActivityOrder
