import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { By } from '@angular/platform-browser';

import { BlogPostComponent } from './blog-post.component';
import { Post } from '../shared/classes/post';
import { BlogPostsService } from '../shared/services/blog-posts.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BlogPostComponent', () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;
  const params: Params = {
    id: 'article-1-title'
  };
  const mockRouter = {
    params: Observable.of(params)

  };
  const testPosts = [
    new Post({
      title: 'testarticle',
      description: 'test article 1 despcription',
      author: 'test author1',
      image: { src: 'assets/images/woman-with-fidget-spinner.jpeg', name: 'woman with fidget spinner' },
      content: '<p>test content1</p>'
    }),
    new Post({
      title: 'TestArticle 2 Title',
      description: 'test article 2 despcription',
      author: 'test author2',
      image: { src: 'assets/images/woman-with-fidget-spinner.jpeg', name: 'woman with fidget spinner' },
      content: '<p>test content2</p>'
    }),
    new Post({
      title: 'TestArticle 3 Title',
      description: 'test article 3 despcription',
      author: 'test author3',
      image: { src: 'assets/images/woman-with-fidget-spinner.jpeg', name: 'woman with fidget spinner' },
      content: '<p>test content3</p>'
    })
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostComponent ],
      providers: [ { provide: ActivatedRoute, useValue: mockRouter }, BlogPostsService, HttpClient, HttpHandler ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('show the article', fakeAsync(() => {
    component.post = new Post({
      title: 'testarticle',
      description: 'test article 1 despcription',
      author: 'test author1',
      image: { src: 'assets/images/woman-with-fidget-spinner.jpeg', name: 'woman with fidget spinner' },
      content: '<p>test content1</p>'
    });

    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement.queryAll(By.css('article'));
    expect(postDebugElement.length).toEqual(1);
    expect(postDebugElement[ 0 ].nativeElement.innerHTML).toEqual(testPosts[ 0 ].content);
  }));
});
