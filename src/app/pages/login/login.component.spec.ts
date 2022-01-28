import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginBtn: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        BrowserModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginBtn = fixture.debugElement.query(By.css('#loginBtn'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate email func should work as expected', () => {
    const validEmail = component.validateEmail('test@test.com');
    const invalidEmail = component.validateEmail('test');

    expect(validEmail).toBeTrue();
    expect(invalidEmail).toBeFalse();
  });

  it('login button should be disabled/enabled', () => {
    component.isDisabled = true;
    fixture.detectChanges();
    expect(loginBtn.nativeElement.disabled).toBe(true);

    component.isDisabled = false;
    fixture.detectChanges();
    expect(loginBtn.nativeElement.disabled).toBe(false);
  });

  it('Email is not valid error should work', () => {
    component.user.email = 'test';
    component.user.password = 'test';
    component.doLogin();
    fixture.detectChanges();

    expect(component.error).toContain('Email is not valid');
  });

  it('doLogin() should be called if you click on login button', () => {
    spyOn(component, 'doLogin');

    component.user.email = 'test@test.com';
    component.user.password = '1234';
    fixture.detectChanges();
    loginBtn.nativeElement.click();

    expect(component.doLogin).toHaveBeenCalledTimes(1);
  });
});
