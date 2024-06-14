import { Controller } from '@nestjs/common';
import { CollectionsService } from 'src/modules/collections/collections.service';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}
}
