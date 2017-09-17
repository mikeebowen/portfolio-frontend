interface IImageOptions {
  src: string;
  name: string;
}

export class Image {
  src: string;
  name?: string;

  constructor(options?: IImageOptions) {
    this.src = options.src;
    this.name = options.name;
  }
}

export type PostType = 'blogPost' | 'projectPost';

interface IPostOptions {
  createdAt?: Date;
  title?: string;
  subtitle?: string;
  author?: string;
  description?: string;
  content?: string;
  image?: Image;
  published?: boolean;
  postType?: PostType;
  uniqueTitle?: string;
}

export class Post {
  createdAt: Date;
  title: string;
  subtitle: string;
  author: string;
  description: string;
  content: string;
  image: Image;
  uniqueTitle: string;
  published: boolean;
  postType: PostType;

  constructor(options: IPostOptions) {
    this.createdAt = options.createdAt;
    this.title = options.title;
    this.subtitle = options.subtitle;
    this.author = options.author;
    this.description = options.description;
    this.content = options.content;
    this.image = options.image;
    this.postType = options.postType;
    this.published = options.published;
    this.uniqueTitle = options.uniqueTitle;
  }
}
