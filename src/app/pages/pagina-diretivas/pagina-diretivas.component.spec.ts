import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { routes } from '../../app-routing.module';
import { PaginaDiretivasComponent } from './pagina-diretivas.component';

describe('PaginaDiretivasComponent', () => {
  let component: PaginaDiretivasComponent;
  let fixture: ComponentFixture<PaginaDiretivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDiretivasComponent],
      imports: [RouterModule.forRoot(routes)]
    });
    fixture = TestBed.createComponent(PaginaDiretivasComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`disciplinas has default value`, () => {
    expect(component.disciplinas).toEqual([
      `Angular`,
      `Spring Boot`,
      `Typescript`,
      `Design`
    ]);
  });

  it(`ativo has default value`, () => {
    expect(component.ativo).toEqual(false);
  });

  it('deve retornar true ao chamar o método #mudarAtivo', () => {
    component.mudarAtivo()
    expect(component.ativo).toBe(true)
  });
});
