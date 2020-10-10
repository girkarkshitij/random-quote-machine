import React from 'react';
import './style.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            quote: 'If you can dream it, you can achieve it.',
            author: 'Zig Ziglar',
        };
        this.fetchQuote = this.fetchQuote.bind(this);
    }

    fetchQuote() {
        fetch(
            'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        )
            .then((data) => data.json())
            .then((quotesArray) => {
                const newQuote =
                    quotesArray.quotes[Math.floor(Math.random() * 101)];
                this.setState({
                    quote: newQuote['quote'],
                    author: newQuote['author'],
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className='container'>
                <div id='quote-box'>
                    <div id='text'>{this.state.quote}</div>
                    <div id='author'>{this.state.author}</div>
                    <a href='twitter.com/intent/tweet' id='tweet-quote'>
                        Tweet Quote
                    </a>
                    <button id='new-quote' onClick={this.fetchQuote}>
                        New Quote
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
