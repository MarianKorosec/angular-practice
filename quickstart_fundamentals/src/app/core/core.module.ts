import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../NgModuleFundamental/shared/shared.module';

import { TitleComponent } from './title.component';

import { DIUserService, UserService, UserServiceConfig } from './user.service';
import { HERO_DI_CONFIG, APP_CONFIG } from '../DIFundamental/app.config';
import { Logger } from './logger.service';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ TitleComponent ],
  exports: [ TitleComponent ],
  providers: [
    Logger,
    UserService,
    DIUserService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    };
  }
}
