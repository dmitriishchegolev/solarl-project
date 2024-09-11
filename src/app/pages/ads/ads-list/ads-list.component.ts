import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrl: './ads-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsListComponent { }
