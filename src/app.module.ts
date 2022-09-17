import { Module } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerSqsModule } from './modules/consumer-sqs/consumer-sqs.module';

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIAXGXL3RJCRI54KJFH',
  secretAccessKey: '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',
});

@Module({
  imports: [ConsumerSqsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
