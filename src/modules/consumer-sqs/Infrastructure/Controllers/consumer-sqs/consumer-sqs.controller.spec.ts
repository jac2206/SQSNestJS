import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerSqsController } from './consumer-sqs.controller';

describe('ConsumerSqsController', () => {
  let controller: ConsumerSqsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumerSqsController],
    }).compile();

    controller = module.get<ConsumerSqsController>(ConsumerSqsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
