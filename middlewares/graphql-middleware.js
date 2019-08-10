import fetch from 'isomorphic-unfetch'

const graphql_middleware = url => {
  return store => {
    return next => {
      return action => {
        if (typeof action.payload === 'object' && action.payload.query) {
          // allow call normal action
          next(action)

          let headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }

          // if (localStorage.getItem('token')) headers['token'] = localStorage.getItem('token')
          fetch(`${url}/graphql`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
              query: action.payload.query,
              variables: { devteam: process.env.NODE_ENV === 'development' }
            })
          })
            .then(r => {
              console.log('r: ', r)
              return r.json()
            })
            .then(data => {
              const result = data.data
              console.log('result: ', result)
              for (var key in result) {
                if (result.hasOwnProperty(key)) {
                  if (result[key].success === false) {
                    alert(result[key].messages)
                    store.dispatch({
                      type: [
                        action.type,
                        key
                          .split(/(?=[A-Z])/)
                          .join('_')
                          .toUpperCase(),
                        'FAIL'
                      ].join('_'),
                      messages: result[key].messages,
                      old_action: action
                    })
                  } else {
                    console.log('store: ', store)
                    store.dispatch({
                      type: [
                        action.type,
                        key
                          .split(/(?=[A-Z])/)
                          .join('_')
                          .toUpperCase(),
                        'SUCCESS'
                      ].join('_'),
                      messages: result[key].messages,
                      data: result[key],
                      old_action: action
                    })
                  }
                }
              }
            })
            .catch(error => {
              console.error(error)

              store.dispatch({
                type: action.type + '_FAIL',
                old_action: action
              })
            })
        } else {
          next(action)
        }
      }
    }
  }
}

export default graphql_middleware
