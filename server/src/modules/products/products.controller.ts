import { Body, Controller, Delete, Get, Header, Headers, HttpException, InternalServerErrorException, Param, Post, Query, Req, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { query } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get("/get-all-products")
  async getAllProduct (){
    try {
      return this.productsService.getAllProduct()
    } catch (exception) {
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)
      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
  @Post("/create-product")
  async createProduct(@Body() body, @Headers("token") header) {
    try {
      return this.productsService.createProduct(body, header)
    } catch (exception) {
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)
      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
  @Get("/update-product")
  async updateProduct(@Body() body, @Headers("token") header) {
    try {
      return this.productsService.updateProduct(body, header)
    } catch (exception) {
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)
      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
  @Delete("/delete-product/:id")
  async deleteProduct(@Param("id") id: number, @Headers("token") header) {
    try {
      return this.productsService.deleteProduct(id, header)
    } catch (exception) {
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)
      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
  @Get("/search-products")
  async searchProduct(@Query() query: string) {
    try {
      return this.productsService.searchProduct(query)
    } catch (exception) {
      if (exception.status != 500)
      throw new HttpException(exception.response, exception.status)
      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
  @Get("/sort-product")
  async sortProduct(@Body() body){
    try {
      return this.productsService.sortProduct(body)
    } catch (exception) {
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)
      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
  @Get("/get-product-detail/:id")
  async getProductByProductId(@Param("id") id: number){
    try{
      return this.productsService.getProductByProductId(id)
    }catch(exception){
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)
      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
  @Post("/upload-file-product")
  async uploadFile(@Req() req: Request, @Res() res: Response) {
    try {
      return this.productsService.uploadFile(req)
  } catch (exception) {
    if (exception.status != 500)
      throw new HttpException(exception.response, exception.status)
    throw new InternalServerErrorException("Internal Server Error ")
  }
  }
  @Get("/get-all-img/:id")
  async getAllImgByProductId(@Param("id") id: number){
    try {
      return this.productsService.getAllImgByProductId(id)
    } catch (exception) {
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)
      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
  @Post("/create-img-variant")
  async createImgByVariantIdAndImgId(@Body() body) {
    try {
      return this.productsService.createImgByVariantIdAndImgId(body)
    } catch (exception) {
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)
      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
}
