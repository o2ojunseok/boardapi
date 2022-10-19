import { Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('list')
  async postList() {
    const posts = await this.postService.findAll();
    return posts;
    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'fetched successfully',
    //   posts
    // }
  }

  @Post('/write')
  async createPost(@Body() data: CreatePostDto) {
    const write = await this.postService.create(data);
    return write;
    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'created successfully',
    //   post
    // }
  } 

  @Get('/detail/:id')
  async findPost(@Param('id') id: number) {
    const data = await this.postService.findOne(id);
    return data;
    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'success',
    //   data,
    // }
  }

  @Post('/edit/:id')
  // @HttpCode(200)
  async updatePost(@Param('id') id: number, @Body() data: UpdatePostDto) { // partial - dto 재사용
    await this.postService.update(id, data);
    return data;
    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'updated successfully',
    //   data
    // }
  }

  @Delete('/delete/:id')
  async deletePost(@Param('id') id: number) {
    await this.postService.delete(id);
    return
    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'delete successfully'
    // }
  }
}
