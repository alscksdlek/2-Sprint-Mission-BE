import { Controller, Get, Param, Post, Body, Patch, Delete, HttpCode } from '@nestjs/common';
import { UUIDPipe } from '#common/uuid.pipe.js';
import type { InputCreateProductDTO, InputUpdateProductDTO } from '#product/product.dto.js';
import { ProductService } from '#product/product.service.js';
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  async getProductById(@Param('id', UUIDPipe) id: string) {
    return await this.productService.getProductById(id);
  }

  @Post()
  async postProduct(@Body() body: InputCreateProductDTO) {
    return await this.productService.createProduct(body);
  }

  @Patch(':id')
  async patchProduct(@Param('id', UUIDPipe) id: string, @Body() body: InputUpdateProductDTO) {
    return await this.productService.updateProduct(id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteProduct(@Param('id', UUIDPipe) id: string) {
    return await this.productService.deleteProduct(id);
  }
}
