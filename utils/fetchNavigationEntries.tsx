import { spaceID, accessToken } from './contentfulConfig';

export const fetchNavigationEntries = async () => {
  const client = require('contentful').createClient({
    space: spaceID,
    accessToken: accessToken,
  });

  const res = await client
    .getEntries({
      content_type: 'navigationItem',
      'fields.codeId': 'topNavigation',
    })
    .then((response) => response.items);

  const topNavLinks = res.pop();

  if (topNavLinks) return topNavLinks.fields.navigationLink;

  console.log('Error fetching the entries');
};

export default { fetchNavigationEntries };
