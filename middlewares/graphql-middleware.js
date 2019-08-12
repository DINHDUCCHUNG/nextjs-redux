import fetch from 'isomorphic-unfetch'

const graphql_middleware = url => {
  return store => {
    return next => {
      return async action => {
        if (typeof action.payload === 'object' && action.payload.query) {
          // allow call normal action
          next(action)

          let headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }

          // if (localStorage.getItem('token')) headers['token'] = localStorage.getItem('token')
          await fetch(`${url}/graphql`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
              query: action.payload.query,
              variables: { devteam: process.env.NODE_ENV === 'development' }
            })
          })
            .then(r => {
              return r.json()
            })
            .then(async data => {
              const result = data.data
              for (var key in result) {
                if (result.hasOwnProperty(key)) {
                  if (result[key].success === false) {
                    alert(result[key].messages)
                    await store.dispatch({
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
