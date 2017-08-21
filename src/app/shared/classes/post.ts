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
  title?: string;
  subtitle?: string;
  author?: string;
  description?: string;
  content?: string;
  image?: Image;
  published?: boolean;
  postType?: PostType;
}

export class Post {
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
    this.title = options.title;
    this.subtitle = options.subtitle;
    this.author = options.author;
    this.description = options.description;
    this.content = options.content;
    this.image = options.image;
    this.postType = options.postType;
    this.published = options.published;
    // TODO add timestamp for unique title in database
    if (this.title) {
      this.uniqueTitle = this.title.toLowerCase().trim().replace(/\s/g, '-')/* + Date.now().toString()*/;
    }
  }
}
