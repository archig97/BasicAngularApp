import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoITEMComponent } from './todo-item.component';

describe('TodoITEMComponent', () => {
  let component: TodoITEMComponent;
  let fixture: ComponentFixture<TodoITEMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoITEMComponent]
    });
    fixture = TestBed.createComponent(TodoITEMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
