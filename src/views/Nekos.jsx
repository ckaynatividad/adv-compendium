import React, { useEffect, useState } from 'react';
import NekoList from '../components/NekoList';
import { getNekos } from '../services/nekos';

export default function Nekos() {
  const [nekos, setNekos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNekos();
      setNekos(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <NekoList nekos={nekos} />
    </div>);
}
