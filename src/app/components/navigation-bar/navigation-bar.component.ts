import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'food-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  searchFc = new FormControl('');
  subs: Subscription[] = [];

  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  constructor(private renderer: Renderer2,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subs.push(this.searchFc.valueChanges.pipe(debounceTime(200)).subscribe(value => {
      if (value.length > 0) {
        this.router.navigateByUrl(`food/search/${value}`);
      }
    }));
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && location.pathname !== '' && location.pathname.includes('recipe')) {
        this.searchFc.setValue('');
      }
    });
  }

  ngOnDestroy() {
  }

  goToCategories() {
    this.searchFc.setValue('');
    this.router.navigateByUrl('food/categories');
  }

  goToRandom() {
    this.router.navigateByUrl('food/random');
  }
}
