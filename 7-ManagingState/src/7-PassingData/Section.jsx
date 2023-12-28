import { useContext } from 'react';
import { LevelContext } from './LevelContext';

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section onClick={(e)=>{ e.target.addEventListener('click', (e)=>{ e.target.innerHTML=`<span class='text-red-500'>${e.target.innerHTML+=' clicked'}</span>`},{once: true})}} className="section border-2 border-primary p-4">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
