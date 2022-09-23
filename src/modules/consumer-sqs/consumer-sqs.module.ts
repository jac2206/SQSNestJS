import { Module } from '@nestjs/common';
import { ConsumerSqsService } from './Application/consumer-sqs/consumer-sqs.service';
import { ConsumerSqsController } from './Infrastructure/Controllers/consumer-sqs/consumer-sqs.controller';
import * as AWS from 'aws-sdk';
import { SqsModule } from '@ssut/nestjs-sqs';
import { HttpModule } from '@nestjs/axios';

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIAXGXL3RJCRI54KJFH',
    secretAccessKey: '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',
  });

@Module({
    imports: [
        SqsModule.register({
            consumers: [
                {
                    name: 'AsusCola.fifo', // name of the queue
                    // name: 'AsusColaNestJS', // name of the queue
                    // queueUrl: 'https://sqs.us-east-1.amazonaws.com/495489616453/AsusColaNestJS',
                    queueUrl: 'https://sqs.us-east-1.amazonaws.com/495489616453/AsusCola.fifo',
                    region: 'us-east-1',
                },
        ],
        producers: [],
      }), HttpModule
    ],
    controllers: [ConsumerSqsController],
    providers: [ConsumerSqsService],
})
export class ConsumerSqsModule {}
