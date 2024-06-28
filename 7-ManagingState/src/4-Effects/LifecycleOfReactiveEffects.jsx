import DataText from './DataText';
export default function LifecycleOfReactiveEffects(lang){

    return (
        <div>
            {lang.lang ? (
                <>{DataText.LifecycleOfReactiveEffects()}</>
            ) : (
                <>{DataText.LifecycleOfReactiveEffectsFa()}</>
            )}
        </div>
    )
 }