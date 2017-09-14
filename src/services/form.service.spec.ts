import {TestBed, inject} from '@angular/core/testing';

import {FormService} from './form.service';

describe('FormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService]
    });
  });

  it('Сервис создан', inject([FormService], (service: FormService) => {
    expect(service).toBeTruthy();
  }));

  it('Пустое значение невалидно', inject([FormService], (service: FormService) => {
    expect(service.control.hasError('required')).toBe(true);
  }));

  it('Строка короче минимальной длины невалидна', inject([FormService], (service: FormService) => {
    service.control.setValue('11');
    expect(service.control.hasError('minlength')).toBe(true);
  }));

  it('Строка длины 3 валидна', inject([FormService], (service: FormService) => {
    service.control.setValue('111');
    expect(service.control.errors).toBeNull();
  }));
});
