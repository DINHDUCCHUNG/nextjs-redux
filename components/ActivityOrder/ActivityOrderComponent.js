import { connect } from 'react-redux'
import { fetch_activity_order } from '../../actions/ActivityOrder'
import { useEffect, useState } from 'react'
import './ActivityOrder.scss'
import moment from 'moment'

const ActivityOrder = props => {
  const [state, setState] = useState({ activityOrderCode: [] })

  useEffect(() => {
    props.fetchActivityOrder()
  }, [])

  useEffect(() => {
    setState({
      ...state,
      activityOrderCode: props.activityOrderCode
    })
  }, [props.activityOrderCode])

  return (
    <div>
      <div className="layout-content">
        <div className="container-fluid flex-grow-1 container-p-y">
          <div className="activity-order-code">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '70%' }}>
                    Hoạt động
                  </th>
                  <th scope="col" style={{ width: '30%' }}>
                    Thời gian
                  </th>
                </tr>
              </thead>
              <tbody>
                {state.activityOrderCode.map((act, index) => {
                  return (
                    <tr key={act.id}>
                      <td>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: act.message
                          }}
                        />
                      </td>
                      <td>{moment(act.createdAt).format('hh:mm [ngày] LL')}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    activityOrderCode: state.activityOrder
  }
}

const mapDispatchToProps = dipatch => {
  return {
    fetchActivityOrder: () => {
      dipatch(fetch_activity_order())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityOrder)
