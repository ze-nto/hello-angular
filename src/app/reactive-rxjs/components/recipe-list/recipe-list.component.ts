import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes$ = this.recipeService.recipes$;
  destroy$ = new Subject<void>()

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    }

}
