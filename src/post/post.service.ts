import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
  @InjectRepository(Post) 
    private postRepository: Repository<Post>){}

  // 전체 조회
  async findAll() {
    return await this.postRepository.find();
  }

  // 상세 조회
  async findOne(id: number) {
    return await this.postRepository.findOne({ where: {id:id} });
  }

  // 게시글 수정
  async update(id: number, data: UpdatePostDto) {
    await this.postRepository.update(id, data);
  }

  // 게시글 생성
  async create(data: CreatePostDto) {
    const post = this.postRepository.create(data);
    await this.postRepository.save(data);
    return post;
  }
  

  // 게시글 삭제
  async delete(id: number) {
    await this.postRepository.delete({ id });
    return `Deleted Success`  
  }

}


// Service
// 애플리케이션의 경계를 저의하고 비즈니스 로직 등 도메인을 캡슐화 하는 역핧