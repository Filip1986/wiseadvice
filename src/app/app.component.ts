// core
import {Component, OnInit} from '@angular/core';

// services
import {LanguageService} from './core/language-service';

// constants
import {AppConstants} from './utils/constants';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  constants = AppConstants;

  constructor(private languageService: LanguageService) {
  }

  ngOnInit() {

    this.languageService.setCurrentLanguage('ro');

    $(document).ready(function ($) {
      const $menu = $('#menu').mmenu({
        'extensions': [
          'fx-menu-slide',
        ],
        'searchfield': {
          'resultsPanel': true,
          'noResults': 'Sorry.. no results :(',
          'placeholder': 'Search'
        },
        'setSelected': {
          'hover': true,
          'parent': true
        },
        'counters': true,
        'navbars': [
          {
            'position': 'top',
            'content': [
              'searchfield'
            ]
          },
          {
            'position': 'bottom',
            'content': [
              "<a class='fa fa-envelope' href='#/'></a>",
              "<a class='fa fa-twitter' href='#/'></a>",
              "<a class='fa fa-facebook' href='#/'></a>"
            ]
          }
        ]
      });

      const $icon = $('#my-icon');
      const API = $menu.data('mmenu');

      $icon.on('click', function () {
        API.open();
      });

      API.bind( 'open:finish', function() {
        $icon.addClass( 'is-active' );
      });
      API.bind( 'close:finish', function() {
        $icon.removeClass( 'is-active' );
      });

    });

  }
}
