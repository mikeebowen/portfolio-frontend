interface ITinymceImageOptions {
  title: string;
  value: string;
}

export class TinymceImage {
  title: string;
  value: string;

  constructor(options: ITinymceImageOptions) {
    this.title = options.title;
    this.value = options.value;
  }
}
