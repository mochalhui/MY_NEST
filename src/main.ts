import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DispatchError } from './common/filters/DispatchError';
import * as passport from 'passport';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new DispatchError());
  app.use(session({
    secret: 'secret-key',
    name: 'sess-tutorial',
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  const options = new DocumentBuilder()
  .setTitle('User Seesion Tutorial')
  .setDescription('Basic Auth and session managemenet')
  .setVersion('1.0')
  .addTag('nestjs')
  .addBearerAuth({'type':'http','description':'Authorization'}, 'header')
  .build();
  const document = SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('api',app,document);
  await app.listen(3333);
}
bootstrap();
