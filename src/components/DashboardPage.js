import React from 'react';
import { connect } from 'react-redux';
import Anime from 'react-anime';
import { duration } from 'moment';


export class DashboardPage extends React.Component {
  render() {

    const animeProps = {
      opacity: [0, 1],
      translateY: [250, 0],
      delay: 1250,
      duration: 2000
    }

    return (
      <Anime {...animeProps}>
  <p>Blog Post</p>
  <p>Blog Post</p>

  <section>
    <p>Upon this, Daggoo, with either hand upon the gunwale to steady his way, swiftly slid aft, and then erecting himself volunteered his lofty shoulders for a pedestal.</p>
    <p>"Good a mast-head as any, sir. Will you mount?"</p>
    <p>"That I will, and thank ye very much, my fine fellow; only I wish you fifty feet taller."</p>
  </section>
</Anime>
    );
  }
};

const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

