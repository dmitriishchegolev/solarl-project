import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-ads-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ads-card.component.html',
  styleUrl: './ads-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsCardComponent {
  public id$: Observable<number>;

  constructor(private ac: ActivatedRoute) {
    this.id$ = this.ac.paramMap.pipe(map((r: any) => r.params.id))
  }
}
