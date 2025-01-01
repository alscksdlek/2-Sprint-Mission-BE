import { Injectable } from '@nestjs/common';
import type { Product } from '@prisma/client'; //service에선 db에 관한걸 아예 몰라야 함, prisma에서 type 가져와서 사용하면 안됨? -> 도메인 모델 사용
import { ProductNotFoundException } from '#common/exceptions/http-exception.js';
import { ProductRepository } from '#product/product.repository.js';
import type { CreateProduct, PatchProduct } from '#product/product.type.js';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProductById(id: string) {
    const product = await this.productRepository.findProductById(id);
    if (!product) throw new ProductNotFoundException();
    return product;
  }

  async createProduct(data: CreateProduct): Promise<Product> {
    return await this.productRepository.createProduct(data);
  }

  async updateProduct(id: string, data: PatchProduct): Promise<Product> {
    const product = await this.productRepository.findProductById(id);
    if (!product) throw new ProductNotFoundException();
    return await this.productRepository.updateProduct(data, id);
  }

  async deleteProduct(id: string): Promise<Product> {
    const product = await this.productRepository.findProductById(id);
    if (!product) throw new ProductNotFoundException();
    return await this.productRepository.deleteProduct(id);
  }
}
