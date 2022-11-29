import { Module } from '@nestjs/common';

import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import { InputsController } from './controllers/inputs.controller';
import { InputsDetailsController } from './controllers/inputs-details.controller';
import { SalesDetailsController } from './controllers/sales-details.controller';
import { SalesController } from './controllers/sales.controller';
import { SalesService } from './services/sales.service';
import { SalesDetailsService } from './services/sales-details.service';
import { InputsDetailsService } from './services/inputs-details.service';
import { InputsService } from './services/inputs.service';

@Module({
  controllers: [ProductsController, CategoriesController, BrandsController, InputsController, InputsDetailsController, SalesDetailsController, SalesController],
  providers: [ProductsService, BrandsService, CategoriesService, SalesService, SalesDetailsService, InputsDetailsService, InputsService],
  exports: [ProductsService],
})
export class ProductsModule {}
