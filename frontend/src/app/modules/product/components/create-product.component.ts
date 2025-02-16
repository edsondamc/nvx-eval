import {Component, OnInit} from '@angular/core';
import {Category, CreateProductGQL, ListCategoriesGQL} from "@graphql";
import {Apollo} from "apollo-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'create-product.component.html',
  providers: [],
})
export class CreateProductComponent implements OnInit {
  // Data
  public categories: Category[] = [];
  // Form
  public createProductForm!: FormGroup;
  public nameControl: FormControl<string | null> = new FormControl(null, Validators.required);
  public descriptionControl: FormControl<string | null> = new FormControl(null, Validators.required);
  public priceControl: FormControl<string | null> = new FormControl(null, Validators.required);
  public categoryControl: FormControl<string | null> = new FormControl(null, Validators.required);

  constructor(private router: Router,
              private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.initForm();
    this.loadCategories();
  }

  private initForm(): void {
    this.createProductForm = new FormGroup({
      name: this.nameControl,
      description: this.descriptionControl,
      price: this.priceControl,
      category: this.categoryControl,
    });
    this.createProductForm.valueChanges.subscribe(value => {
      console.log(this.createProductForm)
    })
  }

  private loadCategories() {
    new ListCategoriesGQL(this.apollo).fetch()
      .subscribe({
        next: response => {
          this.categories = response.data.categories as Category[];
        }
      })
  }

  private createProduct(): void {
    new CreateProductGQL(this.apollo).mutate({
      name: this.nameControl.value!,
      description: this.descriptionControl.value!,
      price: Number(this.priceControl.value!),
      categoryId: parseInt(this.categoryControl.value!),
    }).pipe(finalize(() => {
    })).subscribe({
      next: response => {
        this.router.navigate(['/products']).then();
      }
    });
  }

  public createProductClick() {
    if (this.createProductForm.valid)
      this.createProduct();
  }
}
