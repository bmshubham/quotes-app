import { Data } from './../data/data.interface';

export class  QuotesService {
    private favoriteQuotes: Data[] = [];

    addQuoteToFavorites(quote: Data) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote: Data) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Data) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Data) {
        return this.favoriteQuotes.find((quoteEl: Data) => {
            return quoteEl.id == quote.id;
        });
    }
}