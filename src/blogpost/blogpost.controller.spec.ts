import { Test, TestingModule } from '@nestjs/testing';
import { BlogpostController } from './blogpost.controller';

describe('BlogpostController', () => {
  let controller: BlogpostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogpostController],
    }).compile();

    controller = module.get<BlogpostController>(BlogpostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
