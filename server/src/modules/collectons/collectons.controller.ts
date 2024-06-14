import { Controller } from '@nestjs/common';
import { CollectonsService } from './collectons.service';

@Controller('collectons')
export class CollectonsController {
  constructor(private readonly collectonsService: CollectonsService) {}
}
