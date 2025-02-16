import {Component, OnInit} from '@angular/core';
import {CreateOrderGQL, Customer, ListCustomersOptionsGQL, ListProductsOptionsGQL, OrderDetailInput, Product} from "@graphql";
import {Apollo} from "apollo-angular";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs";
import {Router} from "@angular/router";

interface IDetailForm {
  quantity: FormControl<string | null>;
  price: FormControl<string | null>;
  product: FormControl<Product | null>;
  total: FormControl<string | null>;
}

@Component({
  templateUrl: 'create-order.component.html',
  providers: [],
})
export class CreateOrderComponent implements OnInit {
  // Data
  public customers: Customer[] = [];
  public products: Product[] = [];
  // Form
  public createOrderForm!: FormGroup;
  public totalAmountControl: FormControl<string | null> = new FormControl(null);
  public shippingAddressControl: FormControl<string | null> = new FormControl(null, Validators.required);
  public customerIdControl: FormControl<string | null> = new FormControl(null, Validators.required);
  public detailsFormArray = new FormArray<FormGroup<IDetailForm>>([], [Validators.minLength(1), Validators.required]);

  constructor(private router: Router,
              private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.initForm();
    this.loadCustomers();
    this.loadProducts();
  }

  private initForm(): void {
    this.createOrderForm = new FormGroup({
      totalAmount: this.totalAmountControl,
      shippingAddress: this.shippingAddressControl,
      customerId: this.customerIdControl,
      details: this.detailsFormArray
    });
    this.createOrderForm.valueChanges.subscribe(value => {
      console.log(this.createOrderForm)
    })
  }

  private loadCustomers() {
    new ListCustomersOptionsGQL(this.apollo).fetch()
      .subscribe({
        next: response => {
          this.customers = response.data.customers as Customer[];
        }
      })
  }

  private loadProducts() {
    new ListProductsOptionsGQL(this.apollo).fetch()
      .subscribe({
        next: response => {
          this.products = response.data.products as Product[];
        }
      })
  }

  private createProduct(): void {
    const details: OrderDetailInput[] = this.detailsFormArray.value.map(value => {
      return {
        quantity: parseInt(value.quantity!),
        price: Number(value.price),
        productId: value.product!.id
      }
    });
    new CreateOrderGQL(this.apollo).mutate({
      totalAmount: 0,
      shippingAddress: this.shippingAddressControl.value!,
      customerId: parseInt(this.customerIdControl.value!),
      details: details
    }).pipe(finalize(() => {
    })).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/orders']).then();
      }
    });
  }

  public changeProduct(form: IDetailForm): void {
    const product = form.product.value;
    if (product) {
      form.price.patchValue(product.price);
    }
  }

  public calculate(form: IDetailForm) {const quantity = Number(form.quantity.value);
    const price = Number(form.price.value);
    form.total.patchValue((quantity * price).toFixed(2));
  }

  public createProductClick() {
    if (this.createOrderForm.valid)
      this.createProduct();
  }

  private newDetailForm(): FormGroup<IDetailForm> {
    return new FormGroup<IDetailForm>({
      quantity: new FormControl<string | null>(null, [Validators.required, Validators.min(1)]),
      price: new FormControl<string | null>(null, [Validators.required, Validators.min(0.01)]),
      product: new FormControl<Product | null>(null, [Validators.required]),
      total: new FormControl<string | null>({disabled: true, value: null}, [Validators.required, Validators.min(0)]),
    });
  }

  public addDetail() {
    const detailForm = this.newDetailForm();
    this.detailsFormArray.push(detailForm);
  }

  public removeDetail(index: number) {
    this.detailsFormArray.removeAt(index);
  }
}
