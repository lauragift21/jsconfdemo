export async function onRequest(context) {  
  const { env } = context;
  const data = await env.COMMENTS_DB.prepare('SELECT * from comments').all();
  return Response.json(data);
}
