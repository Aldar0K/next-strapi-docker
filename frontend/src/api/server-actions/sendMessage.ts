'use server';

export const sendMessage = async (formData: FormData): Promise<'ok' | 'error'> => {
  const rawFormData = {
    email: formData.get('email'),
    message: formData.get('message')
  };
  console.log(rawFormData);

  // try {
  //   await fetch(`${process.env.API_URL}/api/messages/send`, {
  //     headers: {
  //       Authorization: `Bearer ${process.env.API_TOKEN}`
  //     },
  //     method: 'POST',
  //     body: JSON.stringify(rawFormData)
  //   });
  //   return 'ok';
  // } catch (error) {
  //   console.error(error);
  //   return 'error';
  // }
  return 'ok';
};
