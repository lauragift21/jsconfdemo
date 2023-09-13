export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const input = await request.formData();
    const json = {};

    for (const [key, value] of input.entries()) {
      json[key] = value;
    }
    const uuid = crypto.randomUUID();
    const pretty = JSON.stringify({ uuid, ...json }, null, 2);
    // Add the comment to the KV store called comments_db
    await env.comments_db.put(uuid, pretty, {
      metadata: { createdAt: Date.now() },
    });
    return new Response(pretty, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing the request:', error);
    return new Response('Internal Server Error', {
      status: 500,
    });
  }
};