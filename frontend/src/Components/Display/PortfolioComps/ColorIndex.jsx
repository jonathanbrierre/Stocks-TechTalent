import React from 'react'

const ColorIndex = () => {
    return (
        <div style = {{ textAlign: 'right', width: '40%', float: 'right', display: 'inline-block', position: 'relative', bottom: '7vh', paddingRight: '1vw'}}>
            <h2>What the colors indicate</h2>
            <ul>
                <li><span style ={{color: 'green'}}>Green</span> indicates the current stock price is <span style = {{color: 'green'}}>higher</span> than its opening price</li>
                <li><span style ={{color: 'red'}}>Red</span> indicates the current stock price is <span style = {{color: 'red'}}>lower</span> than its opening price</li>
                <li><span style ={{color: 'grey'}}>Grey</span> indicates the current stock price is the same as its opening price</li>
            </ul>
        </div>
    )
}

export default ColorIndex
