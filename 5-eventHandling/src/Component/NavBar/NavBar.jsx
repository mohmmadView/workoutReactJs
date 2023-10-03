import './NavBar.css'
import React from "react";
class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            notifications: [
              "اطلاعیه شماره 1",
               "ثبت نام در سایت",
               "تصحیح برگه ها",
             "طراحی پروژه",
             "خرید مایحتاج"
            ]
        }
    }

    render() {
// console.log('====================================');
// console.log(this.state.notifications);
// console.log('====================================');
        return (
            <nav className="navbar navbar-expand-lg navbar-default fixed-top navbar-dark" id="mainNav">

                <div className="container">

                    <a className="navbar-brand" href="#">Hello World</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon">test</span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            {this.state.notifications.length > 0 && (
                                <li className="nav-item">
                                    <span className="bg-black m-2 p-2 rounded-lg  text-white">{this.state.notifications.length}</span>
                                    <a className="nav-link text-white" href="/News/">News <span className="sr-only">(current)</span></a>
                                </li>
                            )}

                        </ul>
                    </div>
                 <button onClick={()=>this.setState(this,()=>{this.state.notifications.pop()})} className="btn btn-danger">دریافت اطلاعیه</button>
                       {console.log(this.state.notifications)}
                </div>
            </nav>
        )
    }
}
export default Navbar