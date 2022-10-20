import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(
  //   new ValidationPipe({ // 좀 더 친절한 에러 메세지를 받음
  //     whitelist: true, // entity 데코레이터에 없는 프로퍼티 값 걸러줌
  //     forbidNonWhitelisted: true, // entity 데코레이터 없는 값 넣으면 에러메세지
  //     transform: true, // controller가 값을 받을 때 controller에 정의한 타입으로 형변환
  //   })
  // );

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,POST,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
