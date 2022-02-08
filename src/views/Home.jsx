import { useEffect } from 'react';
import { useState } from 'react';
import { useMakeups } from '../context/MakeupContext';
import Makeups from './Makeups';

export const Home = () => {
  const { makeups } = useMakeups();

  return <Makeups makeups={makeups} />;
};
