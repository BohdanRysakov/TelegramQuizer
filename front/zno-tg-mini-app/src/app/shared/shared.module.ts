import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBoltLightning, faClock, faStar, faUserGroup, faWallet } from '@fortawesome/free-solid-svg-icons';
import { SectorComponent } from './components/sector/sector.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [SectorComponent, ButtonComponent, AvatarComponent, StatCardComponent],
  exports: [    
    SectorComponent,
    ButtonComponent,
    AvatarComponent,
    StatCardComponent,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faWallet,
      faBoltLightning,
      faUserGroup,
      faStar,
      faClock
    );
  }
}
