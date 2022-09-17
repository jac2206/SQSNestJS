import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerSqsService } from './consumer-sqs.service';

describe('ConsumerSqsService', () => {
  let service: ConsumerSqsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumerSqsService],
    }).compile();

    service = module.get<ConsumerSqsService>(ConsumerSqsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
