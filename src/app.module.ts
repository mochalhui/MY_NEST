import { Module } from '@nestjs/common';
import { CatsController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { UserEntity } from './user/user.entity';
import { ProjectEntity } from './project/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'sqlite',
          database: `${process.cwd()}/tutorial.sqlite`,
          entities: [UserEntity, ProjectEntity],
          synchronize: true,
          // logging: 'all'
      }),
      UserModule,
      ProjectModule,
      AuthModule,
  ],
  controllers: [CatsController],
  providers: [ AppService ],
})
export class AppModule {}
