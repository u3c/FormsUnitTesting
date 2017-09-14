import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TemplateDrivenFormComponent} from './template-driven-form.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('TemplateDrivenFormValidationComponent', () => {
  let component: TemplateDrivenFormComponent;
  let fixture: ComponentFixture<TemplateDrivenFormComponent>;
  let element: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormComponent],
      imports: [FormsModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('input')).nativeElement;

    // Проверка изменений для построения изначального состояния компонента:
    fixture.detectChanges();
  });

  it('Компонент создан', () => {
    expect(component).toBeTruthy();
  });

  // Тестируем шаблонную форму:

  it('Значение модели изменено', () => {
    // Задаём значение поля ввода:
    element.value = 'test';

    // Сообщаем об изменении значения поля ввода:
    element.dispatchEvent(new Event('input'));

    expect(component.theValue).toEqual('test');
  });

  it('Выведен текст в верхнем регистре', () => {
    // Задаём значение поля ввода:
    element.value = 'test';

    // Сообщаем об изменении значения поля ввода:
    element.dispatchEvent(new Event('input'));

    // Запускаем проверку изменений:
    fixture.detectChanges();

    expect(fixture.debugElement
      .query(By.css('code'))
      .nativeElement
      .textContent
    ).toEqual('TEST');
  });
});
