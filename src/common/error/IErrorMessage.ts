import { HttpStatus } from '@nestjs/common';
import { AppErrorTypeEnum } from './AppErrorTypeEnum';

export interface IErrorMessage {//返回给用户的json结构
    type: AppErrorTypeEnum,
    httpStatus: HttpStatus,
    errorMessage: string,
    userMessage: string
}