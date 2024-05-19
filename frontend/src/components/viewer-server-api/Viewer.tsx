'use client';

import { FC, useEffect } from 'react';

const addView = async (id: number): Promise<'ok' | 'error'> => {
  try {
    fetch(`/api/addView/${id}`, {
      method: 'PATCH'
    });
    return 'ok';
  } catch (error) {
    return 'error';
  }
};

type Props = {
  postId: number;
};

export const Viewer: FC<Props> = props => {
  const { postId } = props;

  useEffect(() => {
    addView(postId);
  }, []);

  return null;
};
