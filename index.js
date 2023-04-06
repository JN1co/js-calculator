function App() {

    const [expression, setExpression] = React.useState('');
    const [answer, setAnswer] = React.useState(0);

    const display = (symbol) => {
        setExpression((prev) => prev + symbol);
        if(expression[expression.length - 1] == '=') {
            if(/[1-9.]/.test(symbol)) {
                setExpression(symbol);
            } else {
                setExpression(answer + symbol);
            }
        }
    };

    const calculate = () => {
        setAnswer(eval(expression));
        setExpression((prev) => prev + '=');
    };

    const allClear = () => {
        setExpression('');
        setAnswer(0);
    };

    const clear = () => {
        setExpression(prev => prev.split('').slice(0, prev.length - 1).join(''));
        setAnswer(0);
    };

    return (
        <div className='container'>
            <div className='grid'>
                <div className='dis'>
                    <input type='text' value={expression} placeholder='0' disabled></input>
                    <div className='total'>{answer}</div>
                </div>
                <div onClick={allClear} className='padbutton AC red'>AC</div>
                <div onClick={clear} className='padbutton C red'>C</div>
                <div onClick={() => display('/')} className='padbutton div'>/</div>
                <div onClick={() => display('*')} className='padbutton times'>x</div>
                <div onClick={() => display('7')} className='padbutton seven dark-gray'>7</div>
                <div onClick={() => display('8')} className='padbutton eight dark-gray'>8</div>
                <div onClick={() => display('9')} className='padbutton nine dark-gray'>9</div>
                <div onClick={() => display('-')} className='padbutton minus'>-</div>
                <div onClick={() => display('4')} className='padbutton four dark-gray'>4</div>
                <div onClick={() => display('5')} className='padbutton five dark-gray'>5</div>
                <div onClick={() => display('6')} className='padbutton six dark-gray'>6</div>
                <div onClick={() => display('+')} className='padbutton plus'>+</div>
                <div onClick={() => display('1')} className='padbutton one dark-gray'>1</div>
                <div onClick={() => display('2')} className='padbutton two dark-gray'>2</div>
                <div onClick={() => display('3')} className='padbutton three dark-gray'>3</div>
                <div onClick={calculate} className='padbutton equal blue'>=</div>
                <div onClick={() => display('0')} className='padbutton zero dark-gray'>0</div>
                <div onClick={() => display('.')} className='padbutton dot dark-gray'>.</div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));