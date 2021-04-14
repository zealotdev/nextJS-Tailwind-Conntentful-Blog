const spaceID = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export async function fetchNavigationEntries() {
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
}

export default { fetchNavigationEntries };
