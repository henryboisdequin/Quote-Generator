import React from "react";
import "./Quote.css";

export default class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "Outwork the Competition",
      author: "Unknown",
    };
  }

  onClickNewQuote(quoteInput, authorInput) {
    this.setState({
      quote: quoteInput,
      author: authorInput,
    });
  }

  loading() {
    this.setState({
      quote: "Loading...",
      author: "--",
    });
  }

  async getQuote() {
    this.loading();
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
      const res = await fetch(proxyURL + apiURL);
      const data = await res.json();
      if (data.quoteAuthor === "") {
        this.onClickNewQuote(data.quoteText, "Unknown");
      } else {
        this.onClickNewQuote(data.quoteText, data.quoteAuthor);
      }
    } catch (error) {
      this.setState({
        quote: "Outwork the competition",
        author: "Unknown",
      });
    }
  }

  render() {
    return (
      <div>
        <p className="quote">" {this.state.quote}</p>
        <p className="author">- {this.state.author}</p>
        <button
          className="bg-dark-green f6 link ph3 pv2 mb2 dib white b-none"
          onClick={this.getQuote.bind(this)} // keep this context
        >
          Generate Random Quote
        </button>
      </div>
    );
  }
}
