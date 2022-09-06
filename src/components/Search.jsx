import { useEffect, useState } from 'react';

const fakeApi = () => console.log('API called!');

export function CallWithUseEffect() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (searchTerm.length > 1) fakeApi();
    }, 600);

    return () => clearTimeout(timeoutID);
  }, [searchTerm]);

  return (
    <>
      <label>Search:</label>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
}
