import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  function updateForm(email: string, firstName: string, password: string) {
    component.myForm.controls['email'].setValue(email);
    component.myForm.controls['firstName'].setValue(firstName);
    component.myForm.controls['password'].setValue(password);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('empty form should be invalid', () => {
    updateForm('', '', '');
    fixture.detectChanges();
    expect(component.myForm.valid).toBeFalse();
  });

  it('form should be valid', () => {
    updateForm('test@test.com', 'test', '12345');
    fixture.detectChanges();
    expect(component.myForm.valid).toBeTrue();
  });

  it('form is invalid because email is invalid', () => {
    updateForm('test', 'test', '12345');
    fixture.detectChanges();
    expect(component.myForm.valid).toBeFalse();
    expect(component.myForm.controls['email'].getError('email')).toBeTruthy();
  });
});
