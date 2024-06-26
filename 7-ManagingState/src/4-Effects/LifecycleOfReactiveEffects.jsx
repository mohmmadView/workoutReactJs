export default function LifecycleOfReactiveEffects(lang){

    return (
        <div>
            <h1>Lifecycle Of Reactive Effects</h1>
            <p>
Effects have a different lifecycle from components. Components may mount, update, or unmount. An Effect can only do two things: to start synchronizing something, and later to stop synchronizing it. This cycle can happen multiple times if your Effect depends on props and state that change over time. React provides a linter rule to check that you’ve specified your Effect’s dependencies correctly. This keeps your Effect synchronized to the latest props and state.
            </p>
        </div>
    )
 }