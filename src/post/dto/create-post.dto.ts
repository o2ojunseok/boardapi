import { IsDate, IsNumber, IsString } from "class-validator";
export class CreatePostDto {
    @IsNumber()
    id: number;

    @IsString()
    userName: string;

    @IsString()
    title: string;

    @IsString()
    contents: string;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}

// class-validator
// 오브젝트 프로퍼티를 검증할 수 있는 라이브러리 사용
// 라우터나 컨트롤러에 도달하기 전 body를 클래스의 인스턴스로 변환한 뒤 검증


// DTO (Data Transfer Object) - 계층 간 데이터 교환을 위해 사용하는 객체
// 도메인 Model을 캡슐화하고, UI화면에서 사용하는 데이터만 선택적으로 전송 가능
