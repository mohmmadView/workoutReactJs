import { useState } from  "react"
let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];
export default function Transforming() {
    const [items, setItems] = useState(
        initialShapes
    );
function handleClick(){
const nextShape = items.map((item) => {
    if (item.type === 'square') {
        // No change
        return item;
      } else {
        // Return a new circle 50px below
        return {
          ...item,
          y: item.y + 50,
    }}    }) 
setItems(nextShape);
}
    return(
        <div className="w-3/6 h-96 m-8 flex flex-col gap-3" >
            <button onClick={handleClick} className="btn btn-primary w-3/6 h-10">Element Circle react down</button>
            <div className="flex row justify-between relative">
                {items.map((item) => (
                    <div key={item.id} style={{  
                    background: 'purple',
                    position: 'absolute',
                    left: item.x,
                    top: item.y,
                    borderRadius:
                      item.type === 'circle'
                        ? '50%' : '',
                    width: 40,
                    height: 40, }} ></div>
                ))}
            </div>
        </div>
    )
}