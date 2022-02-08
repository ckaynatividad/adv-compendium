import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getMakeups } from '../services/makeups';

const MakeupContext = createContext();

export function MakeupProvider({ children }) {
  const [makeups, setMakeups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMakeups();
      const newData = [...new Set(data)];
      setMakeups(newData);
    };
    fetchData();
    setLoading(false);
  }, [setLoading]);
  if (loading) return <h1>im loading</h1>;

  return <MakeupContext.Provider value={{ makeups }}>{children}</MakeupContext.Provider>;
}

export const useMakeups = () => {
  const context = useContext(MakeupContext);

  if (context === undefined) {
    throw new Error('use with makeup provider');
  }
  return context;
};
