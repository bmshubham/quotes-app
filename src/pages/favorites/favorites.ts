import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Data } from './../../data/data.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from './../quote/quote';

/**
 * Generated class for the FavoritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Data[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public quotesService: QuotesService, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Data) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => { 
      if(remove){
        this.onRemoveFromFavorites(quote);
      }
    });
    // modal.willLeave.subscribe((remove: boolean) => console.log(remove)); 
  }

  onRemoveFromFavorites(quote: Data) {
    this.quotesService.removeQuoteFromFavorites(quote);
        this.quotes = this.quotesService.getFavoriteQuotes();
        const position = this.quotes.findIndex((quoteEl: Data) => {
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
  }


}
