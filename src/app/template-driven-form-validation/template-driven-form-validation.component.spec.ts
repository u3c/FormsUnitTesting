import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TemplateDrivenFormValidationComponent} from './template-driven-form-validation.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('TemplateDrivenFormValidationComponent', () => {
  let component: TemplateDrivenFormValidationComponent;
  let fixture: ComponentFixture<TemplateDrivenFormValidationComponent>;
  let element: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormValidationComponent],
      imports: [FormsModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormValidationComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('input')).nativeElement;

    // Проверка изменений для построения изначального состояния компонента:
    fixture.detectChanges();
  });

  it('Компонент создан', () => {
    expect(component).toBeTruthy();
  });

  // Тестируем шаблонную форму:

  it('Значение длиной менее 5 символов не проходит валидацию', () => {
    // Задаём значение поля ввода:
    element.value = 'test';

    // Сообщаем об изменении значения поля ввода:
    element.dispatchEvent(new Event('input'));

    // Запускаем проверку изменений:
    fixture.detectChanges();

    // expect it to be the uppercase version
    expect(element
      .classList
      .contains('ng-invalid')
    ).toBe(true);
  });
});
