// export async function post({ request }) {
//   // Get the request body from a form
//   const formData = await request.formData();
//   // Create a new object to store the data
//   const data = {};
//   // Loop through the form data and add it to the object
//   for (const [key, value] of formData.entries()) {
//     data[key] = value;
//   }

//   // send the data as a post to the api
//   const response = await fetch('http://127.0.0.1:8788/api/postcomments', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   return response;
// }
