import DataText from "../TasksContext"
import MediaPlayer from "./mediaPlayer"
export default function HowToWriteAnEffect (lang) {
    return (
      <div className="my-12">
        {lang.lang ? (
          <>{DataText[24].HowToWriteAnEffect()}</>
        ) : (
          <>{DataText[25].HowToWriteAnEffectFa()}</>
        )}
        <div className="divider divider-start text-accent mt-8 divider-secondary ">
          example : <span> Media Player</span>
        </div>
        <MediaPlayer  />
      </div>
    );
}