import { Module } from '@nestjs/common';
import { CollectionsController } from 'src/modules/collections/collections.controller';
import { CollectionsService } from 'src/modules/collections/collections.service';


@Module({
  controllers: [CollectionsController],
  providers: [CollectionsService],
})
export class CollectionsModule {}
