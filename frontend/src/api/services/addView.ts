'use server';

export const addView = async (id: number): Promise<'ok' | 'error'> => {
  try {
    await fetch(`${process.env.API_URL}/api/posts/${id}/add-view`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      },
      method: 'PATCH'
    });
    return 'ok';
  } catch (error) {
    console.error(error);
    return 'error';
  }
};
