import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HttpStrategy } from './http.strategy';
import { AppAuthGuard } from './AppAuthGuard';
import { CookieSerializer } from './cookie-serializer';

@Module({
  providers: [AuthService, HttpStrategy, AppAuthGuard, CookieSerializer],
  controllers: [AuthController]
})
export class AuthModule {}
