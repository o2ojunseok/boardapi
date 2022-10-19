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
// 배열이면 @IsString({ each: true })


// createdto 선택적 종속 받음 
// create와 동일하지만 내부 값이 필수가 아니라 PartialType 사용