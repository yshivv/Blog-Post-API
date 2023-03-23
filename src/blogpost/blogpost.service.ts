import { HttpException, Injectable } from '@nestjs/common';
import{ BLOGPOSTS } from './blogpost.moc';
@Injectable()
export class BlogpostService {
    private blogposts = BLOGPOSTS;

    public getBlogposts(){
        return this.blogposts;
    }

    public postBlogpost(blogpost){
        return this.blogposts.push(blogpost);
    }
    public getBlogpostById(id: number){
        const blogpost = this.blogposts.find((blogpost) => blogpost.id === id);
        if(blogpost){
            throw new HttpException('Not Found', 404);
        }
        return blogpost;
    } 

    public deleteBlogpostById(id: number){
        const index = this.blogposts.findIndex((blogpost) => blogpost.id === id);
        if(index === -1){
            throw new HttpException('Not Found', 404);
        }
        this.blogposts.splice(index,1)
        return ;
    }

    public putBlogpostById(id:number, propertyName: string, propertyValue: string){
        const index = this.blogposts.findIndex((blogpost) => blogpost.id === id);
        if(index === -1){
            throw new HttpException('Not Found', 404);
        }
        this.blogposts[index][propertyName] = propertyValue;
        return ;
    }
}
