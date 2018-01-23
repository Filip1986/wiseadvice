// core
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// components
import {ListsComponent} from './lists/lists.component';

// constants
import {AppConstants} from './utils/constants';

// resolvers
import {Resolvers} from './resolvers/resolvers';

// variables
const routes: Routes = [
  {
    path: AppConstants.ROUTE_BANCURI_ANIMALE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_BANCURI_DIVERSE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CULMI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_GHICITORI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_FABULE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_POEZII,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_POVESTI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_JOCURI_MEMORY_GAME,
    component: ListsComponent,
    data: {
      data: [
        {
          'banc': 'lorem'
        }
      ]
    }
  },
  {
    path: AppConstants.ROUTE_JOCURI_APA_APA_FOC_FOC,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_JOCURI_CAPRA,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_JOCURI_CASTELUL_123,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_JOCURI_LAPTE_GROS,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_JOCURI_INCETUL_CU_INCETUL_SE_FABRICA_OTETUL,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_JOCURI_SOTRONUL,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_JOCURI_NUMARATORI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_WALLPAPERS,
    component: ListsComponent,
    data: {
      data: [
        {
          'banc': 'lorem'
        }
      ]
    }
  },
  {
    path: AppConstants.ROUTE_ANUNTURI_ROMANESTI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CARTI_CRESTINE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CARTI_INTERESANTE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_TOP_DESENE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_TOP_FILME,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_TOP_LISTE_UIMITOARE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_GIFS_COOL,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_GIFS_FAIL,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_GIFS_FUNNY,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_GIFS_INTERESTING,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_GIFS_WOW,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_GIFS_REACTION,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_YOUTUBE_DOCUMENTARIES,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_YOUTUBE_FUNNY,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_YOUTUBE_CHANNELS,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_MUSIC_CALM,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_MUSIC_CHILL,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_MUSIC_CLUB,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_MUSIC_SPACE_OUT,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_AFORSIME_MAXIME,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CREZUL_CRESTIN,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_EREZII,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_SFINTII_PARINTI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_DICTONURI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_EXPRESII,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_SANATATE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_POVETE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_SUPERSTITII,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_ABRAHAM_LINCOLN,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_ALBERT_EINSTEIN,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_ARISTOTEL,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_BENJAMIN_FRANKLIN,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_BUDDHA,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_CONFUCIUS,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_DALAI_LAMA,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_DEMOCRIT,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_EURIPIDE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_GEORGE_BERNARD_SHAW,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_GEORGE_WASHINGTON,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_IMMANUEL_KANT,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_LAO_TZU,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_LUCIUS_ANNAEUS_SENECA,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_MAHATMA_GANDHI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_MAICA_TEREZA,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_MARK_TWAIN,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_MARTIN_LUTHER_KING_JR,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_NAPOLEON_BONAPARTE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_NEALE_DONALD_WALSH,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_OSCAR_WILDE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_PABLO_PICASSO,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_PLATON,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_PUBLILIUS_SYRUS,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_RALPH_WALDO_EMERSON,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_RICHARD_WURMBRAND,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_SFANTUL_AUGUSTIN,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_SFANTUL_CIPRIAN,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_SFANTUL_IOAN_GURA_DE_AUR,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_SFANTUL_IOAN_SCARARUL,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_SFANTUL_IRINEU,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_SFANTUL_PETRU,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_SFANTUL_SIMEON_NOUL_TEOLOG,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_SFANTUL_VASILE_CEL_MARE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_SOCRATES,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_STEVEN_WRIGHT,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_SUN_TZU,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_THOMAS_JEFFERSON,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_WILLIAM_SHAKESPEARE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_WINSTON_CHURCHILL,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CITATE_ALTE_CITATE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CUVINTE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_DEVIZE_DE_VIATA,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_LOZINCI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_FACTS,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CONSTITUTIA_ROMANIEI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_DREPTURILE_OMULUI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CODUL_BUNELOR_MANIERE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_CODUL_PENAL,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_IDEOLOGII,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_ISTORIE,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: AppConstants.ROUTE_LEGENDE_SI_MITURI,
    component: ListsComponent,
    resolve: {
      data: Resolvers
    }
  },
  {
    path: '**',
    redirectTo: '/'
  }
];


/**
 * @description Modularity system which helps organize the app into cohesive blocks of functionality
 * @example https://angular.io/guide/architecture#modules
 * @tutorial https://angular.io/guide/ngmodule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
