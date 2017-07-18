import { Component } from '@angular/core';

import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;
}