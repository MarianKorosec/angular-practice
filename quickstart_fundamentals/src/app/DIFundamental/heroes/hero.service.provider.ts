import { HeroService } from './hero.service';
import { Logger } from './../../core/logger.service';
import { DIUserService } from '../../core/user.service';

let heroServiceFactory = (logger: Logger, userService: DIUserService) => {
  return new HeroService(logger, userService.user.isAuthorized);
};

export let heroServiceProvider = {
  provide: HeroService,
  useFactory: heroServiceFactory,
  deps: [Logger, DIUserService]
};
