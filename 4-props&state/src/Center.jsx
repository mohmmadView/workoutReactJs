import React from 'react'
import Card  from './Component/1-FunctionProps_Card'
import Card2 from './Component/2-ClassProps_Card';
import Card3 from './Component/3-ClassAndFunctionInMapData-Card';
import Person from './Component/4-props_Types';
import UpdateList from './Component/5-Class-State'
import BtnChange from './Component/6-Function-useState' 
import Temperature from './Component/7.Temperature_Display'
import viteLogo  from '../public/tailwindui-small@75.8bb955b2.jpg'
import shoesGreen from './assets/air-vapormax-2021-flyknit-next-nature-mens-shoes-NpTfFz.jpeg';
import shoesBlack from './assets/5b0981ff-45f8-40c3-9372-32430a62aaea.webp';
import shoesWhite from './assets/9355f630-53c7-4567-89b4-a788c93171ea.webp';
import shoesGray from './assets/9dcb2896-e746-4005-a580-608abaa5701d.webp';
import shoesRed from './assets/2104cfe9-9188-4dc3-8919-636ad3e827a3.webp';
import Carousel from './Component/3-ClassAndFunctionInMapData-Card';
import image_1 from './assets/321138.jpg'
import image_2 from './assets/Best-Amazing-Images-For-Desktop.jpg'
import image_3 from './assets/Best-HD-Photos-Ever.jpg'
import image_4 from './assets/image.jpg'
import Prism from 'prismjs';
import PrismGe from './utils/Prism';
import Title from './utils/Title';
import Example from './utils/Example'
import LogoCode from './assets/file-code.svg'
import Modal from './utils/Modal';
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
const code_Props_Type = `import PropTypes from "prop-types";
/** 
* @external PropTypes  
* @see https://www.npmjs.com/package/prop-types
*/
/**
*  components.React (and potentially other libraries—see the 
*  checkPropTypes() reference below) will check props 
*  passed to your components against those definitions,
*   and warn in development if they don’t match.
*/

const Person = ({ name, age }) => {
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
  };
  Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };
  export default Person;`

  const htmlTest=Prism.highlight(code_Props_Type, Prism.languages.js, 'js');
// Returns a highlighted HTML string

var elmCircle = document.querySelector('#circle');
return(
<main  className=" bg-zinc-800 mt-1">
{/* //Todo  Component Card ==  1-functionProps_Card.jsx */}
<Title title="1-Function props" code='./Card1_FunctionProps.jsx' />
<div className="container mx-auto ">

{/* //! Card*/}
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

{/* //Todo  Component Card2 ==  2-functionProps_Card.jsx */ }
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
{/* //Todo  Component Card3 == 3-ClassAndFunctionInMapData-Card */ }
<Title title="3-Class And Function In Map Data" />
<Card3  />
{/* //Todo  Component Person ==  4-props_Types */ }
<Title title="4-propsTypes " />
{/* //Todo  SourceCode  4-Props-Types */}
<Person name="mohammad" age={28} />
<div className="mt-4 p-5 mx-32 mockup-code  bg-violet-300 text-primary-content">
<code><PrismGe code={code_Props_Type} language="javascript" /></code>

</div>
{/* //Todo  Component Card3 == 5-State */ }
<Title title="5-State" />
<div className="mt-4 p-5 mx-32   bg-violet-300 text-primary-content">
<p className="text-2xl text-justify ">Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.
First, import useState from React:</p>
</div>
<Example exampleNumber={1} exampleName="Update List" />
<UpdateList />
<Example exampleName="btn click change Title" exampleNumber={2} />
<BtnChange />
<Example exampleName="Temperature"  exampleNumber={3} />
<Temperature />
</div>
</main>

) 

}

export default Center
