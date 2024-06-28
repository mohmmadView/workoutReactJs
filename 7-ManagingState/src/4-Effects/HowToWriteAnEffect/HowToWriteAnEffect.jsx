// import DataText from "../../TasksContext"
import MediaPlayer from "./mediaPlayer"
import PuttingItAllTogether from "./PuttingItAllTogether"
import DataText from "../DataText"
export default function HowToWriteAnEffect (lang) {
    return (
      <div className="my-12">
        {lang.lang ? (
          <>{DataText.HowToWriteAnEffectText()}</>
        ) : (
          <>{DataText.HowToWriteAnEffectTextFa()}</>
        )}
        <div className="divider divider-start text-accent mt-8 divider-secondary ">
          example : <span> Media Player</span>
        </div>
        <MediaPlayer  />
        <div className="divider divider-start text-accent mt-8 divider-secondary ">
        Putting it all together
        </div>
        <PuttingItAllTogether />
         <div className="divider divider-center text-accent mt-8 divider-secondary ">
           <span className="text-2xl"> You might not need Effect</span>
        </div>
        {lang.lang ? (
          <>{DataText.YouMightNotNeedEffect()}</>
        ) : (
          <>{DataText.YouMightNotNeedEffectFa()}</>
        )}
        {DataText.YouMightNotNeedEffectExample()}
      </div>
    );
}