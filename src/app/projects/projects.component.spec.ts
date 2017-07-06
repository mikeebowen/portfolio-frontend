import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectsComponent } from './projects.component';
import { Post } from '../shared/classes/post';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show jumbotrons for each post', fakeAsync(() => {
    component.projects = [
      new Post({
        title: 'TestArticle 1 Title',
        description: 'test article 1 despcription',
        author: 'test author1',
        image: 'assets/images/test-meerkat.jpeg',
        imageDescription: 'testImageDescription1',
        content: '<p>test content1</p>'
      }),
      new Post({
        title: 'TestArticle 2 Title',
        description: 'test article 2 despcription',
        author: 'test author2',
        image: 'assets/images/test-meerkat.jpeg',
        imageDescription: 'testImageDescription2',
        content: '<p>test content2</p>'
      }),
      new Post({
        title: 'TestArticle 3 Title',
        description: 'test article 3 despcription',
        author: 'test author3',
        image: 'assets/images/test-meerkat.jpeg',
        imageDescription: 'testImageDescription3',
        content: '<p>test content3</p>'
      })
    ];

    tick();
    fixture.detectChanges();
    const postDebugElements = fixture.debugElement.queryAll(By.css('.card'));
    expect(postDebugElements.length).toEqual(3);
    expect(postDebugElements[0].nativeElement.children[0].children[1].innerHTML).toEqual('TestArticle 1 Title');
    expect(postDebugElements[1].nativeElement.children[0].children[1].innerHTML).toEqual('TestArticle 2 Title');
    expect(postDebugElements[2].nativeElement.children[0].children[1].innerHTML).toEqual('TestArticle 3 Title');
  }));
});
