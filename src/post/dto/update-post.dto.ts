import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    contents: string;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}


// createdto 선택적 종속 받음 
// 배열이면 @IsString({ each: true })