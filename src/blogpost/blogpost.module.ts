import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogpostController } from './blogpost.controller';
import { BlogpostService } from './blogpost.service';
import { BlogspotSchema } from './schemas/blogpost.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
    {
      name: 'Username',
      schema: BlogspotSchema,
    },

  ]),
  ],
  controllers: [BlogpostController],
  providers: [BlogpostService]
})
export class BlogpostModule {}
