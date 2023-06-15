import React from 'react'
import Card  from './1-FunctionProps_Card'
import Card2 from './2-ClassProps_Card';
import Card3 from './3-ClassAndFunctionInMapData-Card';
import Person from './4-props_Types';
import viteLogo  from '../public/tailwindui-small@75.8bb955b2.jpg'
import shoesGreen from './assets/air-vapormax-2021-flyknit-next-nature-mens-shoes-NpTfFz.jpeg';
import shoesBlack from './assets/5b0981ff-45f8-40c3-9372-32430a62aaea.webp';
import shoesWhite from './assets/9355f630-53c7-4567-89b4-a788c93171ea.webp';
import shoesGray from './assets/9dcb2896-e746-4005-a580-608abaa5701d.webp';
import shoesRed from './assets/2104cfe9-9188-4dc3-8919-636ad3e827a3.webp';
import Carousel from './3-ClassAndFunctionInMapData-Card';
import image_1 from './assets/321138.jpg'
import image_2 from './assets/Best-Amazing-Images-For-Desktop.jpg'
import image_3 from './assets/Best-HD-Photos-Ever.jpg'
import image_4 from './assets/image.jpg'
import Prism from 'prismjs';

import Title from './Title';
import LogoCode from './assets/file-code.svg'
import Modal from './Modal';
// Prism.manual = true;

// Prism.highlightAll();
function Center(props){
//Todo data in Card1_FunctionProps
  const AllShoes = [
    {id:1,image:shoesGreen,shoesName:"Nike Air",sale:120},
    {id:2,image:shoesBlack,shoesName:"Nike Black",sale:180},
    {id:3,image:shoesWhite,shoesName:"Nike Orange",sale:80},
    {id:4,image:shoesGray,shoesName:"Nike Gray",sale:220},
    {id:5,shoesName:"Nike Pink",sale:190},
  ]
//! TheEnd Data
//Todo data in Card2_ClassProps
  const callOuts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  //! TheEnd Data
const code = [
  {
    NameCode:'Card1_FunctionProps',
    CodeInner:'./Card1_FunctionProps.jsx'
},
]


// The code snippet you want to highlight, as a string
const code_Props_Type = `const Person = ({ name, age }) => {
  return (
<div className="w-3/4 flex justify-evenly mx-auto">

<label className="label">
  <span className="label-text">Props.Types : String</span>
</label>
<label className="input-group">
  <span>Name</span>
  <input type="text" disabled value={name} placeholder=" Type : String" className="input input-bordered" />
</label>



<label className="label">
  <span className="label-text">Props.Types : Number</span>
</label>
<label className="input-group">
  <span>Age</span>
  <input type="text"  disabled value={age} placeholder=" Type : Number" className="input input-bordered" />
</label>
</div>



  );
};`

// Returns a highlighted HTML string


return(
<main  className=" bg-zinc-800 mt-1">

<Title title="1-Function props example" code='./Card1_FunctionProps.jsx' />

<div className="container mx-auto ">

{/* //! Card1*/}
{/* //TODO 1 way Props value*/}
{/*//? <Card image={shoesGreen} shoesName="Nike Air" sale={120} />
 //? <Card image={shoesBlack} shoesName="Nike black" sale={180} />
<//?Card image={shoesWhite} shoesName="Nike Orange" sale={80} />
<//?Card image={shoesGray} shoesName="Nike Gray" sale={220} />
<//?Card image={shoesRed} shoesName="Nike Pink" sale={190} /> *}
*/}


{/*//TODO 2 way Props Array in Data */}
<div className='flex overflow-auto'>
<Card {...AllShoes[0]}/>
<Card {...AllShoes[1]}>
  <button>OFF 50%</button>
</Card>
<Card {...AllShoes[2]}/>
<Card {...AllShoes[3]}>
  <h2>
    OFF 25%
  </h2>
</Card>
<Card {...AllShoes[4]}/> 
</div>


<Title title="2-Class props example" />

<div className="col">
<Card2 {...callOuts[0]}/>
<Card2 {...callOuts[1]}/>
<Card2 {...callOuts[2]}/>
<Card2 {...callOuts[3]} />
<Card2>
  <p className='bg-gray-700 p-2 mb-4 text-center font-bold text-2xl font-mono'>class default props image & children </p>
</Card2>
{/* class component in  map in data */}
</div>
<Title title="3-Class And Function In Map Data" />
<Card3  />
{/* <Carousel />
<Carousel /> */}
<Title title="4-propsTypes " />
{Prism.highlight(code_Props_Type, Prism.languages.javascript, 'jsx')}
 {/* <pre><code className="lang-jsx"> { html }</code></pre> */}
<Person name="mamad" age={5} />
<div className="mt-4 p-5 mx-32 mockup-code  bg-violet-300 text-primary-content">
  <pre className='code-editor'>
  <code>
 {/* <span className='text-black font-bold '> ## Usage</span> <br />

 PropTypes was originally exposed as part of the React core module,<br />
 and is commonly used with React components. <br />
 Here is an example of using PropTypes with a React component,<br />
 which also documents the different validators provided:<br />
<span className='pl-5 text-xl text-yellow-700 font-bold'>```jsx</span><br />
<span className='text-green-500'> import </span> React from 'react';<br />
<span className='text-green-500'> import </span> PropTypes from 'prop-types';<br />

const <span className="text-red-600 bg-secondary"> Person </span>=  (name, age ) ={'>'}<br /> */}

<span className="token keyword">const</span> 
<span className="token function-variable function">Person</span> 
<span className="token operator">=</span> 
<span className="token punctuation">(</span>
<span className="token parameter"> <span className="token punctuation">`{' {'}`</span> name
<span className="token punctuation">,</span> age 
<span className="token punctuation">`{'}'}`</span></span>
<span className="token punctuation">)</span>
<span className="token operator">`{'=>'}`</span>
<span className="token punctuation">`{'{'}`</span> 
<span className="token keyword">return</span> 
<span className="token punctuation">(</span> 
<span className="token operator">&lt;</span>div className
<span className="token operator">=</span>
<span className="token string">"w-3/4 flex justify-evenly mx-auto"</span>
<span className="token operator">></span> 
<span className="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span> <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"label-text"</span><span class="token operator">></span>Props<span class="token punctuation">.</span>Types <span class="token operator">:</span> String<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span> <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"input-group"</span><span class="token operator">></span> <span class="token operator">&lt;</span>span<span class="token operator">></span>Name<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> disabled value<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">" Type : String"</span> className<span class="token operator">=</span><span class="token string">"input input-bordered"</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span> <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span> <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"label-text"</span><span class="token operator">></span>Props<span class="token punctuation">.</span>Types <span class="token operator">:</span> Number<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span> <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"input-group"</span><span class="token operator">></span> <span class="token operator">&lt;</span>span<span class="token operator">></span>Age<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> disabled value<span class="token operator">=</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">" Type : Number"</span> className<span class="token operator">=</span><span class="token string">"input input-bordered"</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code>
<br />
  {/* render() " <br />
    // ... do things with the props<br />
    MyComponent.propTypes = <br />
  // You can declare that a prop is a specific JS primitive. By default, these<br />
  // are all optional.<br />
  optionalArray: PropTypes.array,<br />
  optionalBigInt: PropTypes.bigint,<br />
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,<br />
  optionalNumber: PropTypes.number,<br />
  optionalString: PropTypes.string,<br />
  optionalSymbol: PropTypes.symbol,<br />
  // Anything that can be rendered: numbers, strings, elements or an array<br />
  // (or fragment) containing these types.<br />
  // see https://reactjs.org/docs/rendering-elements.html for more info<br />
  optionalNode: PropTypes.node,<br /> */}
  
  </pre>
</div>
</div>
</main>

) 

}

export default Center