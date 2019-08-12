const initState = []
let i = 0
const Activity = (state = initState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'FETCH_ACTIVITY':
      console.log('1111111')
      i++
      return initState
    case 'FETCH_ACTIVITY_ACTIVITY_SUCCESS':
      console.log('22222')
      i++
      return action.data
    default:
      console.log(i)
      return state
  }
}

export default Activity
