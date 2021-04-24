import { spaceID, accessToken } from './contentfulConfig';

export const fetchCategory = async () => {
  const client = require('contentful').createClient({
    space: spaceID,
    accessToken: accessToken,
  });

  const res = await client
    .getEntries({
      content_type: 'category',
    })
    .then((res) => res.items);

  return res;
};
