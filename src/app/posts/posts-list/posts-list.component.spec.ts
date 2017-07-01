import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { PostsListComponent } from './posts-list.component';

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
});
