import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  longContent = 'The rate at which companies – large and small alike – are experiencing cybersecurity breaches is alarming. With recent high-profile attacks targeting healthcare, finance, retail, government, manufacturing, and energy, it is clear that the threat landscape has evolved significantly over the past few years. '
  blogData: Array<Blog> = [
    { Title: 'How ITech works?', Tag: 'it', Author: 'Filip Strajnar', Content: this.longContent, ThumbnailUrl: '/assets/BLOG-How-to-Uninstall-Apps-on-Every-Device.webp' },
    { Title: 'How Computer Network works?', Tag: 'network', Author: 'Žika Jeram', Content: this.longContent, ThumbnailUrl: '/assets/Blogg-Why-Network-Monitoring-Is-Important.png' },
    { Title: 'How would devices look at the future?', Tag: 'devices', Author: 'Dušan Stevanović', Content: this.longContent, ThumbnailUrl: '/assets/BLOG-What-is-Device-Lifecycle-Management.png' }]

  constructor() { }
  get GetAllBlogs() { return this.blogData }
  searchBlogs(tag: string) {
    return this.blogData.filter(blog => blog.Tag.toLowerCase() === tag.toLowerCase())
  }
  


}
