import Code from './Prism'
export default function CardImport({ code }) {
    return (
        <>
        <div className="collapse collapse-arrow bg-secondary-content">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content"> 
          <Code widthIN="h-18" code="import { useEffect, useState } from " HeaderBol={false} />
        </div>
      </div>
      {/* <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content"> 
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content"> 
          <p>hello</p>
        </div>
      </div> */}
      </>
    );
}