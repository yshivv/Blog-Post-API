import { Module } from '@nestjs/common';
import { BlogpostModule } from './blogpost/blogpost.module';
import { MongooseModule } from '@nestjs/mongoose';
 
@Module({
  imports:[
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/snaptoon'),
    BlogpostModule,
  ],
})
export class AppModule {}
