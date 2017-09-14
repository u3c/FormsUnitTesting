import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveFormComponent} from './reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Компонент создан', () => {
    expect(component).toBeTruthy();
  });

  it('Значение модели изменено', () => {
    // Отслеживаем значение контрола:
    let value = component.valueControl.value;

    component.valueControl.valueChanges.subscribe(newValue => {
      value = newValue;
    });

    // Задаём значение поля ввода:
    const element = fixture.debugElement.query(By.css('input')).nativeElement;

    element.value = 'test';

    // Сообщаем об изменении значения контрола:
    element.dispatchEvent(new Event('input'));

    expect(value).toEqual('test');
  });

  it('Выведен текст в верхнем регистре', () => {
    // Задаём значение поля ввода:
    const element = fixture.debugElement.query(By.css('input')).nativeElement;

    element.value = 'test';

    // Сообщаем об изменении значения поля ввода:
    element.dispatchEvent(new Event('input'));

    // Запускаем проверку изменений:
    fixture.detectChanges();

    // Ожидаем значения в верхнем регистре:
    expect(fixture.debugElement
      .query(By.css('code'))
      .nativeElement
      .textContent
    ).toEqual('TEST');
  });
});
