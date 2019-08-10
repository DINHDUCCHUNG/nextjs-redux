import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetch_activity } from '../actions/Activity'
import Activity from '../components/Activity/Activity'

class Index extends React.Component {
  static getInitialProps({ reduxStore }) {
    // reduxStore.dispatch(serverRenderClock(isServer))
    reduxStore.dispatch(fetch_activity())
    console.log('hello')
    return {}
  }

  // componentDidMount() {
  //   this.props.fetchActivity()
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }

  render() {
    return (
      <div>
        <Link href="/activity-order/ActivityOrder" as="/activity-order/ActivityOrder" passHref>
          <h1>Go to activity order</h1>
        </Link>
        <Activity />
      </div>
    )
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
  null,
  mapDispatchToProps
)(Index)
