import React from "react";
import User from "./User";
import Prism from 'prismjs';
import PrismGe from './Prism';
//TODO props برای مقداری دهی  ثابت استفاده  میشود
//TODO state برای مقدار دهی  که در طول برنامه تغیرر پیدا می کنند استفاده میشود
 class AppName extends React.Component {
    
    constructor(props) {
        super(props)
this.code =`import React from "react";
import User from "./User";
import Prism from 'prismjs';
import PrismGe from './Prism';
//TODO props برای مقداری دهی  ثابت استفاده  میشود
//TODO state برای مقدار دهی  که در طول برنامه تغیرر پیدا می کنند استفاده میشود
 class AppName extends React.Component {
    
    constructor(props) {
        super(props)
this.code =30;

 this.state ={
    users:[    
           {id:1,name: "List_Done"},
           {id:2,name: "ali"},
           {id:3,name: "mamad"},
           {id:4,name: "shahin"},
           {id:5,name: "test"},
           {id:6,name: "Mikele"}
          ] 
    }
    setTimeout(() => {
    this.setState({
    users:[    
           {id:1,name: "Update_List"},
           {id:2,name: "jack"},
           {id:3,name: "Tomi"},
           {id:4,name: "sad"},
           {id:5,name: "hamid"},
           {id:6,name: "hani"}
          ] 
                 })
                   
                },4000)
                     };
render() {
return(
    <div className="flex">
    <div className="w-1/2">
        <h1 className="text-2xl text-red-500 font-bold ">{...this.state.users[0].name}</h1>
        <User {...this.state.users[1]} />
        <User {...this.state.users[2]} />
        <User {...this.state.users[3]} />
        <User {...this.state.users[4]} />
        <User {...this.state.users[5]} />
    </div>
    <div className="w-1/2 mt-4 p-5 mx-32 mockup-code  bg-violet-300 text-primary-content">
<code></code>

</div>
</div>
)
}

}

export default AppName;`;

 this.state ={
    users:[    
           {id:1,name: "List_Done"},
           {id:2,name: "ali"},
           {id:3,name: "mamad"},
           {id:4,name: "shahin"},
           {id:5,name: "test"},
           {id:6,name: "Mikele"}
          ] 
    }
    setTimeout(() => {
    this.setState({
    users:[    
           {id:1,name: "Update_List"},
           {id:2,name: "jack"},
           {id:3,name: "Tomi"},
           {id:4,name: "sad"},
           {id:5,name: "hamid"},
           {id:6,name: "hani"}
          ] 
                 })
                   
                },4000)
                     };
                     clickHandler(){
                       console.log(this);
                     }
                     changeUsersHandler(){
                        this.setState(
                            {
                                users:[
                                    {id:1,name: "Btn_List"},
                                    {id:2,name: "ctrl"},
                                    {id:3,name: "Alt"},
                                    {id:4,name: "Shift"},
                                    {id:5,name: "Enter"},
                                    {id:6,name: "f1"}
                                       ]
                    }
                           )
                     }
render() {
return(
    <div className="flex h-96 m-5 ">
    <div className="w-1/2">
    {/* onClick={this.clickHandler.bind(this)} */}
    {/* onClick={ () => this.clickHandler()} */}
        <h1 onClick={()=> this.clickHandler()} className="text-2xl text-red-500 font-bold ">{...this.state.users[0].name}</h1>
        <button className="p-3 border m-4 rounded-xl hover:bg-slate-500" onClick={this.changeUsersHandler.bind(this)}>change btn keyboard</button>
        <User className="mt-2" {...this.state.users[1]} />
        <User {...this.state.users[2]} />
        <User {...this.state.users[3]} />
        <User {...this.state.users[4]} />
        <User {...this.state.users[5]} />
    </div>
    <div className="w-1/2 mt-4 p-5 mx-32 mockup-code overflow-scroll bg-violet-300 text-primary-content">
<code>
    <PrismGe code={this.code} language="javascript" ></PrismGe>
</code>

</div>
</div>
)
}

}

export default AppName;