import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Data } from './../../data/data.interface';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Data[], icon: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public quotesService: QuotesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
    // this.quoteGroup = this.navParams.data; // Add Elvis Operator (?) in template to use this
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Data) {
    const alert =   this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are You Sure?',
      message: 'Are You Sure You Want To Add Quote?',
      buttons: [
        {
          text: 'Yes, Go Ahead!',
          handler: () => { this.quotesService.addQuoteToFavorites(selectedQuote) }
        },
        {
          text: 'No, I Changed My Mind!!',
          role: 'cancel',
          handler: () => { console.log('Cancelled'); }
        }
      ]
    });
    alert.present();
  }

}
