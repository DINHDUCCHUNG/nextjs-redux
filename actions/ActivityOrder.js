export const fetch_activity_order = () => {
  return {
    type: 'FETCH_ACTIVITY_ORDER',
    payload: {
      query: `
        {
          activityOrder(orderId: 121){
            className
            message
            createdAt
            id
            photoUrlsJson
          }
        }
      `
    }
  }
}
