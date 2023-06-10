import React from 'react'
import Card  from './Card1_FunctionProps'
import viteLogo  from '../public/tailwindui-small@75.8bb955b2.jpg'
import shoesGreen from './assets/air-vapormax-2021-flyknit-next-nature-mens-shoes-NpTfFz.jpeg';
import shoesBlack from './assets/5b0981ff-45f8-40c3-9372-32430a62aaea.webp';
import shoesWhite from './assets/9355f630-53c7-4567-89b4-a788c93171ea.webp';
import shoesGray from './assets/9dcb2896-e746-4005-a580-608abaa5701d.webp';
import shoesRed from './assets/2104cfe9-9188-4dc3-8919-636ad3e827a3.webp';
import Carousel from './Card3_ClassAndFunctionInMapData';
import image_1 from './assets/321138.jpg'
import image_2 from './assets/Best-Amazing-Images-For-Desktop.jpg'
import image_3 from './assets/Best-HD-Photos-Ever.jpg'
import image_4 from './assets/image.jpg'
import Card2 from './Card2_ClassProps';
import Card3 from './Card3_ClassAndFunctionInMapData';
import Title from './Title';
import LogoCode from './assets/file-code.svg'
import Modal from './Modal';
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

return(
<main  className=" bg-zinc-800 mt-1">

<Title title="function props example" />

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
<div className='flex'>
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


<Title title="Class props example" />
<div className="col">
<div className=''>
<Card2 {...callOuts[0]}/>
<Card2 {...callOuts[1]}/>
<Card2 {...callOuts[2]}/>
<Card2 {...callOuts[3]} />
<Card2>
  <p className='bg-gray-700 p-2 mb-4 text-center font-bold text-2xl font-mono'>class default props image & children </p>
</Card2>
{/* class component in  map in data */}
</div>

<Card3 />
{/* <Carousel />
<Carousel /> */}
<Title title="propsTypes " />
<div className="mt-4 p-5 mx-32 mockup-code bg-violet-300 text-primary-content">
  <pre><code>
 <span className='text-black font-bold '> ## Usage</span> <br />

 PropTypes was originally exposed as part of the React core module,<br />
 and is commonly used with React components. <br />
 Here is an example of using PropTypes with a React component,<br />
 which also documents the different validators provided:<br />
<span className='pl-5 text-xl text-yellow-700 font-bold'>```jsx</span><br />
import React from 'react';<br />
import PropTypes from 'prop-types';<br />

class MyComponent extends React.Component "<br />
  render() " <br />
    // ... do things with the props<br />
    MyComponent.propTypes = <br />
  // You can declare that a prop is a specific JS primitive. By default, these<br />
  // are all optional.<br />
  optionalArray: PropTypes.array,<br />
  optionalBigInt: PropTypes.bigint,<br />
  optionalBool: PropTypes.bool,<br />
  optionalFunc: PropTypes.func,<br />
  optionalNumber: PropTypes.number,<br />
  optionalString: PropTypes.string,<br />
  optionalSymbol: PropTypes.symbol,<br />
  // Anything that can be rendered: numbers, strings, elements or an array<br />
  // (or fragment) containing these types.<br />
  // see https://reactjs.org/docs/rendering-elements.html for more info<br />
  optionalNode: PropTypes.node,<br />
  </code></pre>
</div>
</div>
</div>
</main>

) 

}

export default Center