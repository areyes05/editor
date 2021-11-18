import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFactoryComponent } from './post-factory.component';

describe('PostFactoryComponent', () => {
  let component: PostFactoryComponent;
  let fixture: ComponentFixture<PostFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
