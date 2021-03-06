import { connect } from 'react-redux';

import { updateCampaign, requestSingleCampaign } from '../../actions/campaign_actions';
import EditCampaign from './edit_campaign';

const mapStateToProps = (state, ownProps) => {
  return {
    campaign: state.campaign[ownProps.match.params.campaignId],
    campaignId: ownProps.match.params.campaignId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCampaign: (campaign, id) => dispatch(updateCampaign(campaign, id)),
    requestSingleCampaign: (id) => dispatch(requestSingleCampaign(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCampaign);
