import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetch_activity } from '../actions/Activity'
import Activity from '../components/Activity/Activity'

class Index extends React.Component {
  static async getInitialProps({ store, req }) {
    // reduxStore.dispatch(serverRenderClock(isServer))
    const isServer = !!req
    if (!!req) await store.dispatch(fetch_activity())
    return { isServer }
  }

  componentDidMount() {
    if (!this.props.isServer) this.props.fetchActivity()
  }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }

  render() {
    //  console.log(this.props.activity)
    return (
      <div>
        <Link href="/activity-order/ActivityOrder" as="/activityOrder">
          <h1>Go to activity order</h1>
        </Link>
        <Activity />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activity: state.activity
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchActivity: () => {
      dispatch(fetch_activity())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
