import { Module } from '@nestjs/common';
import { CollectonsService } from './collectons.service';
import { CollectonsController } from './collectons.controller';

@Module({
  controllers: [CollectonsController],
  providers: [CollectonsService],
})
export class CollectonsModule {}
