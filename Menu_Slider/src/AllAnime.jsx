

// const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly"]

// const AnimationChain = () => {

//   const [ animationIndex, setAnimationIndex ] = useState(0)
//   const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

//   const handleChainAnimation = () => {
   
//    setCounter(animationIndex+1)

//     setAnimationType(selectedItems[animationIndex+1])
//   }

//   return (
//     <MovingText
//       onAnimationEnd={handleChainAnimation}
//       type={animationType}
//       duration="1000ms"
//       timing="linear"
//       iteration={1}>
//       MovingText
//     </MovingText>
//   )
// }
const MyAnimatedTypo = () => {
  return (
    <MovingText
    className="text-5xl  text-white font-serif font-bold bg-stone-700/25  p-4 absolute z-10  top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
      type="squeezeVertical"
      duration="1000ms"
      delay="0s"
      direction="alternate"
      timing="ease"
      iteration="infinite"
      fillMode="none">
  
<h2 className="">Hyer is a simple, straightforward app that connects</h2>  </MovingText>
  )
 
  }

 
export  default MyAnimatedTypo