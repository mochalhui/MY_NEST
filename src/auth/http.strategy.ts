import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-http-bearer';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy){
    async validate(token: any, done: Function) {
        done(null,{user:'test'});
    }
}