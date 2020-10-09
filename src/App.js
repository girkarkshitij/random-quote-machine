import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <div id='quote-box'>
                    <div id='text'>Quote Text</div>
                    <div id='author'>Quote Author</div>
                    <a href='twitter.com/intent/tweet' id='tweet-quote'>
                        Tweet Quote
                    </a>
                    <button id='new-quote'>New Quote</button>
                </div>
            </div>
        );
    }
}

export default App;
