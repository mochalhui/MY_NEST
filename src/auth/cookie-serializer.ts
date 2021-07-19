import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class CookieSerializer extends PassportSerializer {
    serializeUser(user: any, done: Function): any {
        done(null,user);
    }

    deserializeUser(payload: any, done: Function): any {
        done(null,payload);
    }
}