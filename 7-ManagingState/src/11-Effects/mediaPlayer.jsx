import { useState, useRef, useEffect } from 'react';
import Code from '../utils/Prism';
function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
useEffect(() => {
  const handlerPlay= () => {
   if (isPlaying) {
    ref.current.play();  // Calling these while rendering isn't allowed.
  } else {
    ref.current.pause(); // Also, this crashes.
} 
}
return  handlerPlay();
})
return <video ref={ref} src={src} loop playsInline />;
}
export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
   <div className='flex' >
        <div className='w-1/2' >
          <VideoPlayer
            isPlaying={isPlaying}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          />
           <button className='btn w-full btn-secondary' onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
         <div className='w-1/2'>
               <Code more={true} code={`
   import { useState, useRef, useEffect } from 'react';
import Code from '../utils/Prism';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
useEffect(() => {
  if (isPlaying) {
    ref.current.play();  // Calling these while rendering isn't allowed.
  } else {
    ref.current.pause(); // Also, this crashes.
}
})
return <video ref={ref} src={src} loop playsInline />;
}
export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
   <div className='flex' >
        <div className='w-1/2' >
          <VideoPlayer
            isPlaying={isPlaying}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          />
           <button className='btn w-full btn-secondary' onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
       
   </div>
  );
}
     `} language={"js"}
              widthIN={"w-full  "} ></Code>
           
         </div>
   </div>
  );
}
