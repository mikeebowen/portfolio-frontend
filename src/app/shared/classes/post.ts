type PostType = 'blogPost' | 'projectPost';

interface IPostOptions {
  title?: string;
  subtitle?: string;
  author?: string;
  description?: string;
  content?: string;
  image?: string;
  imageDescription?: string;
  postType?: PostType;
}

export class Post {
  title: string;
  subtitle: string;
  author: string;
  description: string;
  content: string;
  image: string;
  imageDescription: string;
  uniqueTitle: string;
  postType: PostType;

  constructor(options: IPostOptions) {
    this.title = options.title;
    this.subtitle = options.subtitle;
    this.author = options.author;
    this.description = options.description;
    this.content = options.content;
    this.image = options.image;
    this.imageDescription = options.imageDescription;
    this.postType = options.postType;
    // TODO add timestamp for unique title in database
    this.uniqueTitle = this.title.toLowerCase().trim().replace(/\s/g, '-')/* + Date.now().toString()*/;
  }
}