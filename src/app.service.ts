import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postArr(arr: any[]): number[] {
    console.log(arr);
    const numArr = arr.filter((item) => typeof item === 'number');
    return numArr.sort((a, b) => a - b);
  }
}
