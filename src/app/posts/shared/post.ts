interface IPostOptions {
  title?: string;
  subtitle?: string;
  content?: string;
  author?: string;
}

export class Post {
  title: string;
  subtitle: string;
  content: string;
  author: string;
  uniqueTitle: string;

  constructor(options: IPostOptions) {
    this.title = options.title;
    this.subtitle = options.title;
    this.content = options.content;
    this.author = options.author;
    // TODO add timestamp for unique title in database
    this.uniqueTitle = this.title.toLowerCase().replace(' ', '-')/* + Date.now().toString()*/;
  }
}
