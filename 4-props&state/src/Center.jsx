import React from 'react'
import Card  from './Card'
import viteLogo  from '../public/tailwindui-small@75.8bb955b2.jpg'
import shoesGreen from './assets/air-vapormax-2021-flyknit-next-nature-mens-shoes-NpTfFz.jpeg';
import shoesBlack from './assets/5b0981ff-45f8-40c3-9372-32430a62aaea.webp';
import shoesWhite from './assets/9355f630-53c7-4567-89b4-a788c93171ea.webp';
import shoesGray from './assets/9dcb2896-e746-4005-a580-608abaa5701d.webp';
import shoesRed from './assets/2104cfe9-9188-4dc3-8919-636ad3e827a3.webp';
function Center(props){

  const AllShoes = [
    {id:1,image:shoesGreen,shoesName:"Nike Air",sale:120},
    {id:2,image:shoesBlack,shoesName:"Nike Black",sale:180},
    {id:3,image:shoesWhite,shoesName:"Nike Orange",sale:80},
    {id:4,image:shoesGray,shoesName:"Nike Gray",sale:220},
    {id:5,shoesName:"Nike Pink",sale:190},
  ]
return(
<main  className="">
<h1 className='text-center p-5 font-thin text-5xl font-bold'>props Exmpile</h1>
<div className="container mx-auto flex">
{/* 1 way */}
{/* <Card image={shoesGreen} shoesName="Nike Air" sale={120} />
<Card image={shoesBlack} shoesName="Nike black" sale={180} />
<Card image={shoesWhite} shoesName="Nike Orange" sale={80} />
<Card image={shoesGray} shoesName="Nike Gray" sale={220} />
<Card image={shoesRed} shoesName="Nike Pink" sale={190} /> *}
*/}
{/* 2 way */}
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
</main>

) 

}


  


export default Center