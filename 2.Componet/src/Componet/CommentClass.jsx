import React,{Component} from 'react';

export default class CommentClass extends Component {

render(){
  return(

          <div className="w-full  m-5 bg-slate-200/10 p-8  divide-y divide-dotted divide-green-400  ">
            <h1 className="text-center  text-lime-400 font-serif font-bold text-4xl">{this.props.subject}</h1>
            <p className="m-5 p-1 text-white text-2xl">{this.props.title}<p className="text-yellow-600 bg-black ">{this.props.pre}</p></p>
        </div>
)
}


}