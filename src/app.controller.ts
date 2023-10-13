import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('All of api')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Hello World! 메세지를 받아 볼 수 있습니다.' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('postarr')
  @ApiOperation({
    summary:
      '배열을 입력으로 받습니다. 숫자는 오름차순으로 정렬시키며, 그 외 타입은 삭제합니다.',
  })
  @ApiResponse({
    status: 201,
    description: '정리가 완료된 배열',
    schema: {
      example: [1, 2, 3],
      type: 'array',
      items: { type: 'number' },
    },
  })
  @ApiBody({
    description: '배열',
    required: true,
    schema: {
      type: 'object',
      properties: {
        arr: {
          type: 'array',
          items: {},
          example: [3, 'test', 2, 1],
        },
      },
    },
  })
  postArr(@Body('arr') arr: any[]): any[] {
    return this.appService.postArr(arr);
  }
}
