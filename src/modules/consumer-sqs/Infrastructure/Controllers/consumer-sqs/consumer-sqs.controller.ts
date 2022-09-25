import { Body, Controller, Post } from '@nestjs/common';
import { ConsumerSqsService } from 'src/modules/consumer-sqs/Application/consumer-sqs/consumer-sqs.service';
import { EventSendSNS } from 'src/modules/consumer-sqs/Domain/Entities/EventRecivedSQS';

@Controller('consumersqs')
export class ConsumerSqsController {
  constructor(private readonly consumerSqsService: ConsumerSqsService) {}
  @Post()
  async RecibirEventoSQS(@Body() event: EventSendSNS): Promise<EventSendSNS> {
    //   console.log(event);
    console.log(
      (await this.consumerSqsService.sendSQSMessengeToService(event)).data,
    );
    //   console.log((await this.consumerSqsService.findAll()).data)
    return event;
  }
}
