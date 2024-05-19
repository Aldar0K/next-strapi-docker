'use client';

import { sendMessage } from '@/api/server-actions/sendMessage';
import { FC } from 'react';

export const Form: FC = () => {
  return (
    <form action={sendMessage}>
      <input type='email' name='email' placeholder='Email' />
      <input type='text' name='message' placeholder='Message' />
      <button type='submit'>Send</button>
    </form>
  );
};
