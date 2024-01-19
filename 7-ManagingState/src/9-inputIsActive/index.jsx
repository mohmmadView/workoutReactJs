import { useState } from "react"

export default function InputActive(){
let [type ,setType] = useState("");
let [disable,setDisable] = useState(true);
let [value ,setValue] = useState("");
var timeOut ;
    return (
        <div className="">
        <h3 className="text-3xl">InputActive</h3>
        <p className="text-xl pb-4">In which city is there a billboard that turns air into drinkable water?</p>
            <div className="flex h-28">
                <textarea onKeyDown={()=>{ clearTimeout(timeOut); setType("Typeing")}} onKeyUp={()=>{timeOut = setTimeout(()=>{ setType("")},1000) }}
                onChange={(e)=>{
                    e.target.value.length > 0 ? setDisable(false) : setDisable(true);
                    setValue(e.target.value)
                    }} type="text" className="textarea textarea-secondary w-full max-w-xs" />
                <button  className={`btn  btn-primary ml-4 h-full  ${disable ? "btn-disabled" : ""}`}
                onClick={()=>{value==="iran" ? setType("Success") : setType("Error")   }}>Submit</button>
              
            </div>
              <span className={type == "Success"?"bg-success-content  text-success font-bold ":"text-error" }>{type}</span>
        </div>
    )

}