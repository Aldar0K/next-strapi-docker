'use client';

import { addView } from '@/api/server-actions/addView';
import { FC, useEffect } from 'react';

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
