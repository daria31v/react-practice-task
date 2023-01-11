import './Counter.css'
export const Controls = ({onIncrement, onDecrement}) => (
   
        <div className="Counter__controls">
            <button type="button" onClick={onIncrement}>Up 1</button>
            <button type="button" onClick={onDecrement}>Down 1</button>
        </div>
    
);
