import { Data } from './../data/data.interface';

export class  QuotesService {
    private favoriteQuotes: Data[] = [];

    addQuoteToFavorites(quote: Data) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteToFavorites(quote: Data) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Data) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }
}