import React, { useState } from 'react';

let globalState: any = {};

export const setGlobalState = (key: string, value: any) => {
  globalState[key] = value;
};

export const getGlobalState = (key: string) => {
  return globalState[key];
};

const SomeComponent: React.FC = () => {
  const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setGlobalState('name', e.target.value); 
  };

  return <input type="text" value={name} onChange={handleChange} />;
};