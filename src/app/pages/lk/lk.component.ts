import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lk',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lk.component.html',
  styleUrl: './lk.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LkComponent { }
