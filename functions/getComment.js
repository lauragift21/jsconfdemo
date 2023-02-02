export async function onRequestGet(context) {
  console.log(context.env.COMMENTS_DB)
  return new Response('Get')
  // const { ps } = env.COMMENTS_DB.prepare('SELECT * from comments');
  // const data = await ps.all();
  // return new Response(JSON.stringify(data));
}
