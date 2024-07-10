import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EMPTY, take } from 'rxjs';
import { ListaService } from './lista.service';

const mockValues = [{
  id: 49,
  nome: 'Pêssego em calda',
  categoria: 'conservas',
  quantidade: 4,
  marca: 'Marca AW',
  preco: 6.99,
  validade: '2025-02-01'
},
{
  id: 50,
  nome: 'Frango inteiro',
  categoria: 'açougue',
  quantidade: 2.0,
  marca: 'Marca AX',
  preco: 15.99,
  validade: '2024-05-05'
}]


describe('ListaService', () => {
  let service: ListaService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListaService]
    });
    service = TestBed.inject(ListaService);
    controller = TestBed.inject(HttpTestingController)
  });

  beforeEach((): void => {
    jest.useFakeTimers();
    controller.verify();
  });

  it('cria o serviço', () => {
    expect(service).toBeTruthy()
  })
 
  it('should handle get posts properly', (done) => {
    service
      .getLista()
      .subscribe( (res) => {
          expect(res.body?.length).toBe(2);
          console.log(res);
        
        done()
        // expect(res.body?[0]).toEqual(mockValues[0]);
        // expect(res.headers['method']).toBe('GET')
      });

    const request: TestRequest = controller.expectOne({
      method: 'GET',
      url: service.url,
    });

    request.flush(mockValues);
  }, 60000);

  it('should handle get posts error properly',  (done) => {
    console.log(service.url)
     service
      .getLista()
      .pipe(take(1))
      .subscribe((res) => {
        expect(res).toBeFalsy();
        expect(res).toEqual(EMPTY);
        done();
      });

    const request: TestRequest = controller.expectOne({
      method: 'GET',
      url: service.url,
    });

    request.flush(null, { status: 404, statusText: 'Resource Not found' });
  }, 60000);

});
