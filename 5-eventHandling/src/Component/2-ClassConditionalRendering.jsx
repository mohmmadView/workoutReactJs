import React from "react";

class ClassConditionalRendering extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 19,
    };
  }
  render() {
    //  روش  اول برای شرطی کردن
    // if(this.state.age > 18){
    //     return(
    //         <>
    //         شما وارد شدید
    //         </>
    //     )
    //     }
    //     else{
    //         return(
    //             <>
    //             شما وارد نشدید
    //             </>
    //         )
    //     }
    // }
    // روش دوم برای شرطی کردن
    // let errorMsg=null;
    // if(this.state.age > 18){
    // errorMsg="شما وارد شدید"
    // }
    // else{
    // errorMsg="شما وارد نشدید"
    // }
    //          return (
    //              <h1 className='text-2xl text-red-500 font-bold '>
    //           {errorMsg}
    //              </h1>
    //           );
    // روش سوم برای شرطی کردن
    // return(
    //    <>
    //    {this.state.age > 2 && (
    //     <h1>شما وارد نشد</h1>

    // )}
    //    </>
    // )

    return <>{this.state.age > 22 ? "شما وارد شدید" : "شما وارد نشدید"}</>;
  }
}

export default ClassConditionalRendering;
