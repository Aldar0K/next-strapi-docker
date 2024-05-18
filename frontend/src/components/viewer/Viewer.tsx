'use client';

import { addView } from '@/api/services/addView';
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
