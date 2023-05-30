import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUserDetailComponent } from './git-user-detail.component';

describe('GitUserDetailComponent', () => {
  let component: GitUserDetailComponent;
  let fixture: ComponentFixture<GitUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitUserDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
