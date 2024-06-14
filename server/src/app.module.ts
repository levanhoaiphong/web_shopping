import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ProductsModule } from 'src/modules/products/products.module';
import { CartsModule } from 'src/modules/carts/carts.module';
import { CollectionsModule } from 'src/modules/collections/collections.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { HomeModule } from 'src/modules/home/home.module';
import { CustomersModule } from 'src/modules/customers/customers.module';
import { OrdersModule } from 'src/modules/orders/orders.module';
import { UsersModule } from 'src/modules/users/users.module';
import { UploadMiddleware } from 'src/common/middleware/upload.middleware';

@Module({
  imports: [AuthModule, ProductsModule, CollectionsModule, CartsModule, DashboardModule, HomeModule, CustomersModule, OrdersModule, UsersModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply((req, res, next) => {
      const uploadMiddleware = new UploadMiddleware({ destination: 'products' });
      uploadMiddleware.use(req, res, next)
    }).forRoutes({ path: 'products/upload-file', method: RequestMethod.POST })
  }
}
