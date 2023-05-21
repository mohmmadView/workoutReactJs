import React,{ Component } from "react";
import logoReact from "./assets/react.svg"

 export default class Card3 extends Component {
    render(props){
  return (
    <div  className="bg-gray-100 my-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-2 sm:py-24 lg:max-w-none lg:py-8">
        {this.props.children}
          <h2 className="text-2xl font-bold text-gray-900">{this.props.name} </h2>

          <div className=" ">
            
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={this.props.imageSrc}
                    alt={this.props.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={this.props.href}>
                    <span className="absolute inset-0" />
                    {this.props.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{this.props.description}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

Card3.defaultProps={
    name: 'default_Value',
imageSrc: logoReact
}