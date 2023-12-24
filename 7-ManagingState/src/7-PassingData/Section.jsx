import { useContext } from 'react';
import { LevelContext } from './LevelContext';

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section border-2 border-primary p-4">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
