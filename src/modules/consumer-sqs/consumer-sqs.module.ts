import { Module } from '@nestjs/common';
import { ConsumerSqsService } from './Application/consumer-sqs/consumer-sqs.service';
import { ConsumerSqsController } from './Infrastructure/Controllers/consumer-sqs/consumer-sqs.controller';
import * as AWS from 'aws-sdk';
import { SqsModule } from '@ssut/nestjs-sqs';
import { HttpModule } from '@nestjs/axios';

// AWS.config.update({
//   region: 'us-east-1',
//   accessKeyId: 'AKIAXGXL3RJCRI54KJFH',
//   secretAccessKey: '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',
// });

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

@Module({
  imports: [
    SqsModule.register({
      consumers: [
        {
          // name: 'MicroServicerReadSQS.fifo', // name of the queue
          // name: 'AsusColaNestJS', // name of the queue
          // queueUrl: 'https://sqs.us-east-1.amazonaws.com/495489616453/AsusColaNestJS',
          name: 'PCO-SC-TESTCONCEPTSNSTOPIC.fifo', // name of the queue
          queueUrl:
            'https://sqs.us-east-1.amazonaws.com/771275521383/PCO-SC-TESTCONCEPTSNSTOPIC.fifo',
          // queueUrl:
          //   'https://sqs.us-east-1.amazonaws.com/495489616453/MicroServicerReadSQS.fifo',
          region: 'us-east-1',
          // name: process.env.QUEUE_NAME, // name of the queue
          // queueUrl: process.env.QUEUE_URL,
          // region: process.env.AWS_DEFAULT_REGION,
        },
      ],
      producers: [],
    }),
    HttpModule,
  ],
  controllers: [ConsumerSqsController],
  providers: [ConsumerSqsService],
})
export class ConsumerSqsModule {}
