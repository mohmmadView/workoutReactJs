import DataText from "../TasksContext"
export default function HowToWriteAnEffect (lang) {

    return (
      <div className="my-12">
        {lang.lang ? (
          <>{DataText[24].HowToWriteAnEffect()}</>
        ) : (
          <>{DataText[25].HowToWriteAnEffectFa()}</>
        )}
      </div>
    );
}