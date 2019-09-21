import { Controller } from "stimulus"
import config from '../config';


export default class extends Controller {

  quotes = config.quotes;

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  newQuote(event) {
    const ind = Math.round(Math.random() * (this.quotes.length - 0));
    const quote = this.quotes[ind];
    event.target.innerHTML = quote;
  }
}
