import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { FormsModule } from '@angular/forms';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validar resultado correcto de suma de dos numeros', () => {
    const resultado = component.sumar(2, 2);

    expect(resultado).toEqual(4);

  });

  it('validar la correcta conversion a mayuscula del texto', () => {
    const resultadomayusucula = component.convertirMayuscula("hola mundo");

    expect(resultadomayusucula).toEqual("HOLA MUNDO");
  });

  it('validar el error del formulario con el campo nombre vacio', () => {
    component.nombre = "";
    component.age = 15;

    component.onValidate();

    expect(component.errorMessage).toBe("Debe rellenar el campo nombre");
  });

});
