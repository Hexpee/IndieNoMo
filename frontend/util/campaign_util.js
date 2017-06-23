export const fetchAllCampaigns = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/campaigns'
  });
};

export const fetchSingleCampaign = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/campaigns/${id}`
  });
};

export const createCampaign = (campaign) => {
  return $.ajax({
    method: 'POST',
    url: 'api/campaigns',
    data: { campaign }
  });
};

export const editCampaign = (campaign) => {
  return $.ajax({
    method: 'PATCH',
    url: `posts/campaigns/${campaign.id}`,
    data: { campaign }
  });
};

export const deleteCampaign = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/campaigns${id}`,
  });
};