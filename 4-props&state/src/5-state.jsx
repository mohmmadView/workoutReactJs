import React from "react";
import User from "./User";
//TODO props برای مقداری دهی  ثابت استفاده  میشود
//TODO state برای مقدار دهی  که در طول برنامه تغیرر پیدا می کنند استفاده میشود
 class AppName extends React.Component {
    constructor(props) {
        super(props)
 this.state ={
    users:[    
           {id:1,name: "John"},
           {id:2,name: "ali"},
           {id:3,name: "mamad"},
           {id:4,name: "shahin"},
           {id:5,name: "test"},
          ] 
    }
    setTimeout(() => {
    this.setState({
    users:[    
           {id:1,name: "lives"},
           {id:2,name: "jack"},
           {id:3,name: "Tomi"},
           {id:4,name: "sad"},
           {id:5,name: "hamid"},
          ] 
                 })
                   
                },4000)
                     };
render() {
return(
    <div>
        <User {...this.state.users[0]} />
        <User {...this.state.users[1]} />
        <User {...this.state.users[2]} />
        <User {...this.state.users[3]} />
        <User {...this.state.users[4]} />
    </div>
)
}

}

export default AppName;