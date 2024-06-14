import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SuccessException } from 'src/config/response';

@Injectable()
export class AuthService {
    prisma = new PrismaClient()
    async registerCustomer(body) {
        const { first_name, last_name, email, phone, password, password_confirmation } = body
        const getAllCustomer = await this.prisma.customers.findMany()
        throw new SuccessException(HttpStatus.FOUND, getAllCustomer, "Get Data Success", new Date().toISOString())
    }

    async loginCustomer (body){
        const { email, password, password_confirmation } = body
    }
    async getAllCus() {
        let getAllCustomer = await this.prisma.customers.findMany()
        throw new SuccessException(HttpStatus.FOUND, getAllCustomer, "Get Data Success", new Date().toISOString())
    }
}
