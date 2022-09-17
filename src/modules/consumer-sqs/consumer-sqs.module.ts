import { Module } from '@nestjs/common';
import { ConsumerSqsService } from './Application/consumer-sqs/consumer-sqs.service';
import { ConsumerSqsController } from './Infrastructure/Controllers/consumer-sqs/consumer-sqs.controller';
import * as AWS from 'aws-sdk';
import { SqsModule } from '@ssut/nestjs-sqs';

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
                    name: 'MicroServicerReadSQS', // name of the queue 
                    queueUrl: 'https://sqs.us-east-1.amazonaws.com/495489616453/MicroServicerReadSQS', 
                    region: 'us-east-1',
                },
        ],
        producers: [],
      })
    ],
    controllers: [ConsumerSqsController],
    providers: [ConsumerSqsService],
})
export class ConsumerSqsModule {}
