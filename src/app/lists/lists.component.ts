// core
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

// constants
import {AppConstants} from '../utils/constants';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  data: any;

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    this.data = this._route.snapshot.data['data'];
    console.log('this.data', this.data);


    /*if (this._router.url.substring(1) === AppConstants.ROUTE_BANCURI_ANIMALE) {
      this.data = AppConstants.ROUTE_BANCURI_ANIMALE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_BANCURI_DIVERSE) {
      this.data = AppConstants.ROUTE_BANCURI_DIVERSE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CULMI) {
      this.data = AppConstants.ROUTE_CULMI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_GHICITORI) {
      this.data = AppConstants.ROUTE_GHICITORI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_FABULE) {
      this.data = AppConstants.ROUTE_FABULE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_POEZII) {
      this.data = AppConstants.ROUTE_POEZII;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_POVESTI) {
      this.data = AppConstants.ROUTE_POVESTI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_MEMORY_GAME) {
      this.data = AppConstants.ROUTE_JOCURI_MEMORY_GAME;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_APA_APA_FOC_FOC) {
      this.data = AppConstants.ROUTE_JOCURI_APA_APA_FOC_FOC;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_CAPRA) {
      this.data = AppConstants.ROUTE_JOCURI_CAPRA;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_CASTELUL_123) {
      this.data = AppConstants.ROUTE_JOCURI_CASTELUL_123;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_LAPTE_GROS) {
      this.data = AppConstants.ROUTE_JOCURI_LAPTE_GROS;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_INCETUL_CU_INCETUL_SE_FABRICA_OTETUL) {
      this.data = AppConstants.ROUTE_JOCURI_INCETUL_CU_INCETUL_SE_FABRICA_OTETUL;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_SOTRONUL) {
      this.data = AppConstants.ROUTE_JOCURI_SOTRONUL;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_NUMARATORI) {
      this.data = AppConstants.ROUTE_JOCURI_NUMARATORI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_WALLPAPERS) {
      this.data = AppConstants.ROUTE_WALLPAPERS;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_ANUNTURI_ROMANESTI) {
      this.data = AppConstants.ROUTE_ANUNTURI_ROMANESTI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CARTI_CRESTINE) {
      this.data = AppConstants.ROUTE_CARTI_CRESTINE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CARTI_INTERESANTE) {
      this.data = AppConstants.ROUTE_CARTI_INTERESANTE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_TOP_DESENE) {
      this.data = AppConstants.ROUTE_TOP_DESENE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_TOP_LISTE_UIMITOARE) {
      this.data = AppConstants.ROUTE_TOP_LISTE_UIMITOARE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_TOP_FILME) {
      this.data = AppConstants.ROUTE_TOP_FILME;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_COOL) {
      this.data = AppConstants.ROUTE_GIFS_COOL;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_FAIL) {
      this.data = AppConstants.ROUTE_GIFS_FAIL;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_FUNNY) {
      this.data = AppConstants.ROUTE_GIFS_FUNNY;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_INTERESTING) {
      this.data = AppConstants.ROUTE_GIFS_INTERESTING;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_WOW) {
      this.data = AppConstants.ROUTE_GIFS_WOW;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_REACTION) {
      this.data = AppConstants.ROUTE_GIFS_REACTION;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_YOUTUBE_DOCUMENTARIES) {
      this.data = AppConstants.ROUTE_YOUTUBE_DOCUMENTARIES;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_YOUTUBE_FUNNY) {
      this.data = AppConstants.ROUTE_YOUTUBE_FUNNY;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_YOUTUBE_CHANNELS) {
      this.data = AppConstants.ROUTE_YOUTUBE_CHANNELS;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_MUSIC_CALM) {
      this.data = AppConstants.ROUTE_MUSIC_CALM;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_MUSIC_CHILL) {
      this.data = AppConstants.ROUTE_MUSIC_CHILL;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_MUSIC_CLUB) {
      this.data = AppConstants.ROUTE_MUSIC_CLUB;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_MUSIC_SPACE_OUT) {
      this.data = AppConstants.ROUTE_MUSIC_SPACE_OUT;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_AFORSIME_MAXIME) {
      this.data = AppConstants.ROUTE_AFORSIME_MAXIME;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CREZUL_CRESTIN) {
      this.data = AppConstants.ROUTE_CREZUL_CRESTIN;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_EREZII) {
      this.data = AppConstants.ROUTE_EREZII;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_SFINTII_PARINTI) {
      this.data = AppConstants.ROUTE_SFINTII_PARINTI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_DICTONURI) {
      this.data = AppConstants.ROUTE_DICTONURI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_EXPRESII) {
      this.data = AppConstants.ROUTE_EXPRESII;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_SANATATE) {
      this.data = AppConstants.ROUTE_SANATATE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_POVETE) {
      this.data = AppConstants.ROUTE_POVETE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_SUPERSTITII) {
      this.data = AppConstants.ROUTE_SUPERSTITII;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_ABRAHAM_LINCOLN) {
      this.data = AppConstants.ROUTE_CITATE_ABRAHAM_LINCOLN;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_ALBERT_EINSTEIN) {
      this.data = AppConstants.ROUTE_CITATE_ALBERT_EINSTEIN;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_ARISTOTEL) {
      this.data = AppConstants.ROUTE_CITATE_ARISTOTEL;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_BENJAMIN_FRANKLIN) {
      this.data = AppConstants.ROUTE_CITATE_BENJAMIN_FRANKLIN;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_BUDDHA) {
      this.data = AppConstants.ROUTE_CITATE_BUDDHA;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_CONFUCIUS) {
      this.data = AppConstants.ROUTE_CITATE_CONFUCIUS;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_DALAI_LAMA) {
      this.data = AppConstants.ROUTE_CITATE_DALAI_LAMA;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_DEMOCRIT) {
      this.data = AppConstants.ROUTE_CITATE_DEMOCRIT;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_EURIPIDE) {
      this.data = AppConstants.ROUTE_CITATE_EURIPIDE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_GEORGE_BERNARD_SHAW) {
      this.data = AppConstants.ROUTE_CITATE_GEORGE_BERNARD_SHAW;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_GEORGE_WASHINGTON) {
      this.data = AppConstants.ROUTE_CITATE_GEORGE_WASHINGTON;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_IMMANUEL_KANT) {
      this.data = AppConstants.ROUTE_CITATE_IMMANUEL_KANT;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_LAO_TZU) {
      this.data = AppConstants.ROUTE_CITATE_LAO_TZU;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_LUCIUS_ANNAEUS_SENECA) {
      this.data = AppConstants.ROUTE_CITATE_LUCIUS_ANNAEUS_SENECA;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_MAHATMA_GANDHI) {
      this.data = AppConstants.ROUTE_CITATE_MAHATMA_GANDHI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_MAICA_TEREZA) {
      this.data = AppConstants.ROUTE_CITATE_MAICA_TEREZA;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_MARK_TWAIN) {
      this.data = AppConstants.ROUTE_CITATE_MARK_TWAIN;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_MARTIN_LUTHER_KING_JR) {
      this.data = AppConstants.ROUTE_CITATE_MARTIN_LUTHER_KING_JR;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_NAPOLEON_BONAPARTE) {
      this.data = AppConstants.ROUTE_CITATE_NAPOLEON_BONAPARTE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_NEALE_DONALD_WALSH) {
      this.data = AppConstants.ROUTE_CITATE_NEALE_DONALD_WALSH;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_OSCAR_WILDE) {
      this.data = AppConstants.ROUTE_CITATE_OSCAR_WILDE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_PABLO_PICASSO) {
      this.data = AppConstants.ROUTE_CITATE_PABLO_PICASSO;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_PLATON) {
      this.data = AppConstants.ROUTE_CITATE_PLATON;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_PUBLILIUS_SYRUS) {
      this.data = AppConstants.ROUTE_CITATE_PUBLILIUS_SYRUS;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_RALPH_WALDO_EMERSON) {
      this.data = AppConstants.ROUTE_CITATE_RALPH_WALDO_EMERSON;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_RICHARD_WURMBRAND) {
      this.data = AppConstants.ROUTE_CITATE_RICHARD_WURMBRAND;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_AUGUSTIN) {
      this.data = AppConstants.ROUTE_CITATE_SFANTUL_AUGUSTIN;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_CIPRIAN) {
      this.data = AppConstants.ROUTE_CITATE_SFANTUL_CIPRIAN;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_IOAN_GURA_DE_AUR) {
      this.data = AppConstants.ROUTE_CITATE_SFANTUL_IOAN_GURA_DE_AUR;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_IOAN_SCARARUL) {
      this.data = AppConstants.ROUTE_CITATE_SFANTUL_IOAN_SCARARUL;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_IRINEU) {
      this.data = AppConstants.ROUTE_CITATE_SFANTUL_IRINEU;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_PETRU) {
      this.data = AppConstants.ROUTE_CITATE_SFANTUL_PETRU;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_SIMEON_NOUL_TEOLOG) {
      this.data = AppConstants.ROUTE_CITATE_SFANTUL_SIMEON_NOUL_TEOLOG;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_VASILE_CEL_MARE) {
      this.data = AppConstants.ROUTE_CITATE_SFANTUL_VASILE_CEL_MARE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SOCRATES) {
      this.data = AppConstants.ROUTE_CITATE_SOCRATES;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_STEVEN_WRIGHT) {
      this.data = AppConstants.ROUTE_CITATE_STEVEN_WRIGHT;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SUN_TZU) {
      this.data = AppConstants.ROUTE_CITATE_SUN_TZU;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_THOMAS_JEFFERSON) {
      this.data = AppConstants.ROUTE_CITATE_THOMAS_JEFFERSON;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_WILLIAM_SHAKESPEARE) {
      this.data = AppConstants.ROUTE_CITATE_WILLIAM_SHAKESPEARE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_WINSTON_CHURCHILL) {
      this.data = AppConstants.ROUTE_CITATE_WINSTON_CHURCHILL;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_ALTE_CITATE) {
      this.data = AppConstants.ROUTE_CITATE_ALTE_CITATE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CUVINTE) {
      this.data = AppConstants.ROUTE_CUVINTE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_DEVIZE_DE_VIATA) {
      this.data = AppConstants.ROUTE_DEVIZE_DE_VIATA;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_LOZINCI) {
      this.data = AppConstants.ROUTE_LOZINCI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_FACTS) {
      this.data = AppConstants.ROUTE_FACTS;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CONSTITUTIA_ROMANIEI) {
      this.data = AppConstants.ROUTE_CONSTITUTIA_ROMANIEI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_DREPTURILE_OMULUI) {
      this.data = AppConstants.ROUTE_DREPTURILE_OMULUI;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CODUL_BUNELOR_MANIERE) {
      this.data = AppConstants.ROUTE_CODUL_BUNELOR_MANIERE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_CODUL_PENAL) {
      this.data = AppConstants.ROUTE_CODUL_PENAL;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_IDEOLOGII) {
      this.data = AppConstants.ROUTE_IDEOLOGII;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_ISTORIE) {
      this.data = AppConstants.ROUTE_ISTORIE;
    }
    if (this._router.url.substring(1) === AppConstants.ROUTE_LEGENDE_SI_MITURI) {
      this.data = AppConstants.ROUTE_LEGENDE_SI_MITURI;
    }*/

  }

}
