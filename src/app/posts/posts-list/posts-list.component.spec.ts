import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

import { PostsListComponent } from './posts-list.component';
import { Post } from '../shared/post';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  const mockRouter = {
    snapshot: {},
    params: Observable.of({
      params: {
        id: 'tacocat'
      }
    })

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListComponent ],
      imports: [ RouterTestingModule ],
      providers: [ { provide: ActivatedRoute, useValue: mockRouter } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show jumbotrons for each post', fakeAsync(() => {
    component.posts = [
      new Post({
        title: 'TestArticle 1 Title',
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

    tick();
    fixture.detectChanges();
    const postDebugElements = fixture.debugElement.queryAll(By.css('.post-item-card'));
    expect(postDebugElements.length).toEqual(3);
    expect(postDebugElements[0].nativeElement.children[0].children[1].innerHTML).toEqual('TestArticle 1 Title');
    expect(postDebugElements[1].nativeElement.children[0].children[1].innerHTML).toEqual('TestArticle 2 Title');
    expect(postDebugElements[2].nativeElement.children[0].children[1].innerHTML).toEqual('TestArticle 3 Title');
  }));
});
