import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
<main className='' >
<div className="flex justify-center">
<h1 className="inline-block  text-5xl font-bold  underline p-4 border mt-3 border-yellow-800 text-yellow-600 "> jsx </h1>
</div>
<h1 className=" text-3xl font-bold underline p-4 text-center mt-3 ">What is a Jsx <span className='text-green-500 text-5xl font-mono font-extrabold'> ?</span></h1>
<section className='flex justify-center'>
<div className="w-3/4  bg-slate-700 p-8 border "><p className='text-justify mb-6'>JSX stands for JavaScript XML. It allows writing HTML in
 JavaScript and converts the HTML tags into React elements.</p>
 <ul className="list-disc pb-6 pl-6 text-green-400">
  <li className=' '>JSX stands for JavaScript XML.</li>
  <li className=' '>JSX allows us to write HTML in React.</li>
  <li className=' '>JSX makes it easier to write and add HTML in React.</li>
 </ul>
 <div className="mockup-code">
  <pre data-prefix="$"><code className=""><span className="text-purple-400">const</span> element <span className=" ">=</span> <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h1</span><span className="token punctuation">&gt;</span></span><span className="token plain-text">Hello, world!</span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h1</span><span className="token punctuation">&gt;</span></span><span className="token punctuation">;</span></code></pre> 
  <pre data-prefix="$" className=""><span class="token keyword text-purple-400">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</pre> 
  <pre data-prefix=">" className="text-success"><code>root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>myElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
 </div>
</section>
   

</main>
  )
}

export default App
