import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { By } from '@angular/platform-browser';

import { BlogPostComponent } from './blog-post.component';
import { Post } from '../../shared/classes/post';

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
      image: 'test_image1.jpg',
      imageDescription: 'testImageDescription1',
      content: '<p>test content1</p>'
    }),
    new Post({
      title: 'TestArticle 2 Title',
      description: 'test article 2 despcription',
      author: 'test author2',
      image: 'test_image2.jpg',
      imageDescription: 'testImageDescription2',
      content: '<p>test content2</p>'
    }),
    new Post({
      title: 'TestArticle 3 Title',
      description: 'test article 3 despcription',
      author: 'test author3',
      image: 'test_image3.jpg',
      imageDescription: 'testImageDescription3',
      content: '<p>test content3</p>'
    })
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostComponent ],
      providers: [ { provide: ActivatedRoute, useValue: mockRouter } ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('show the article', fakeAsync(() => {
    // TODO: make test get post from array of posts
    component.post = new Post({
      title: 'testarticle',
      description: 'test article 1 despcription',
      author: 'test author1',
      image: 'test_image1.jpg',
      imageDescription: 'testImageDescription1',
      content: '<p>test content1</p>'
    });
    // component.posts = testPosts;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement.queryAll(By.css('article'));
    // console.log('testPosts. : ', testPosts);
    expect(postDebugElement.length).toEqual(1);
    expect(postDebugElement[ 0 ].nativeElement.innerHTML).toEqual(testPosts[ 0 ].content);
  }));
});
