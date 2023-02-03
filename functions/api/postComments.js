export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const input = await request.json();
    const uuid = crypto.randomUUID();
    const pretty = JSON.stringify({ uuid, ...input }, null, 2);
    // Add the comment to the KV store called comments_db
    await env.comments_db.put(uuid, pretty, {
      metadata: { createdAt: Date.now() },
    });
    return new Response(pretty, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  } catch (error) {
    return new Response('Error parsing JSON content', {
      status: 400,
    });
  }
};