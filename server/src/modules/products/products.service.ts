import { Injectable, Body, Header, HttpStatus } from '@nestjs/common';
import { query } from 'express';
import { SuccessException } from 'src/config/response';

@Injectable()
export class ProductsService {
    async getAllProduct() {
        throw new SuccessException(HttpStatus.FOUND, "data", "Get Data Success", new Date().toISOString())
    }
    async createProduct(body, deader) {
        const {} = body
        
    }
    async updateProduct(body, deader) {
        const { } = body

    }
    async deleteProduct(id, header) {

    }
    async searchProduct(query) {

    }
    async sortProduct(body){
        const { } = body

    }
    async getProductByProductId(id){

    }
    async uploadFile (req){
        console.log(req.files)
    }
    async createImgByVariantIdAndImgId(body){

    }
    async getAllImgByProductId(id){
        
    }
}
