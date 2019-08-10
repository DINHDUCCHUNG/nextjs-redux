export const fetch_activity = () => {
  return {
    type: 'FETCH_ACTIVITY',
    payload: {
      query: `
      {
            activity(vendorId: 6, date: "7/31/2019") {
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
