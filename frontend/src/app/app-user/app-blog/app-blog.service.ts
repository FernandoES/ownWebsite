import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface IBlogEntry {
    title: string;
    text: string;
    id: string;
}
@Injectable()
export class AppBlogService {
    constructor() { }

    fetchArticlesList(): Observable<IBlogEntry[]> {
        return of([{title:"newest Article", id: "newest_article", text: "new ideas shown blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"Second article", id:"second_article", text:"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title: "oldest Article",id:"oldest_article", text: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"newest Article", id: "newest_article", text: "new ideas shown blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"Second article", id:"second_article", text:"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title: "oldest Article",id:"oldest_article", text: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"newest Article", id: "newest_article", text: "new ideas shown blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"Second article", id:"second_article", text:"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title: "oldest Article",id:"oldest_article", text: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"newest Article", id: "newest_article", text: "new ideas shown blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"Second article", id:"second_article", text:"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title: "oldest Article",id:"oldest_article", text: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"newest Article", id: "newest_article", text: "new ideas shown blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"Second article", id:"second_article", text:"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title: "oldest Article",id:"oldest_article", text: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"newest Article", id: "newest_article", text: "new ideas shown blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title:"Second article", id:"second_article", text:"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},
        {title: "oldest Article",id:"oldest_article", text: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "},]);
    }
    
}