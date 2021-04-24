import { spaceID, accessToken } from './contentfulConfig';

export const fetchTodayPickPost = async () => {
  const client = require('contentful').createClient({
    space: spaceID,
    accessToken: accessToken,
  });

  const res = await client
    .getEntries({
      content_type: 'editorPick',
      'fields.externalName': "Today's Pick",
    })
    .then((res) => res.items);

  if (res) return res.pop().fields.blogPost.fields;
  console.log('Error fetching todays editor pick ');
};

export default { fetchTodayPickPost };
