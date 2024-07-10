import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { Product } from "../model/product";
import { ProductsService } from "./../products.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  private productsSub: Subscription | undefined;
  cart: Product[] = [];
  showPriceRangeHint = false;
  submitted: boolean = false;
  keywords = new FormArray([ ])

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [ Validators.required, Validators.minLength(5), Validators.pattern("^[A-Za-z ]+$")],
      updateOn: 'change'
    }),
    price: new FormControl(undefined, {
      validators: [ Validators.required, Validators.pattern("^[0-9\.]+$")]
    })
  })

  constructor(
    private productService: ProductsService,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm()
  }

  addProduct(product: Product){
    this.cart.push(product)
  }


  createProduct(){
    console.log(this.productForm.value)
    this.submitted = true;
    this.productForm.reset()
  }

private buildForm(){
  let bd = this.builder.nonNullable

  // this.productForm = 
    // this.builder.nonNullable.group({
    // name: bd.control('', [Validators.required, Validators.minLength(10)]),
    // price: bd.control<number | undefined>(undefined, [Validators.required, priceRangeValidator()]),
    // info: this.builder.nonNullable.group({
    //   category: bd.control('', Validators.required),
    //   description: bd.control('', Validators.required),
    //   photo: bd.control('', Validators.required),
    // })
  // })

  let field= this.productForm.get('name')
  field?.statusChanges.subscribe(status => {
    console.log(status)
    if(status == 'INVALID'){
      this.productForm.get('price')?.disable()
    }else{
      this.productForm.get('price')?.enable()
    }
  })


}
createKeywordsControl(){

}


}
