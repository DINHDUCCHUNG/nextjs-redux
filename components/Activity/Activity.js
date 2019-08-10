import { connect } from 'react-redux'
import moment from 'moment'
const Activity = props => {
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
                {props.activity.map((act, index) => {
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
    activity: state.activity
  }
}
export default connect(
  mapStateToProps,
  null
)(Activity)
