import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BlogpostService } from './blogpost.service'
import { BlogpostDto } from './blogpost.dto';
import { Param, Query } from '@nestjs/common/decorators';

@Controller('blogpost')
export class BlogpostController {
    constructor(private blogpostService: BlogpostService) {}

    @Get()
    public  getBlogposts(){
       return this.blogpostService.getBlogposts();
    }

    @Post()
    public postBlogpost(@Body() blogpost: BlogpostDto){
       return this.blogpostService.postBlogpost(blogpost);
    }

    @Get(':id')
    public async  getBlogpostById(@Param('id') id: number){
        return this.blogpostService.getBlogpostById(id);
       
    }

    @Delete(':id')
    public async deleteBlogpostById(@Param('id') id: number){
        return this.blogpostService.deleteBlogpostById(id);
    }

    @Put(':id')
    public async putBlogpostById(@Param('id') id: number,@Query() query){
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.blogpostService.putBlogpostById(id, propertyName, propertyValue);
    }
}
