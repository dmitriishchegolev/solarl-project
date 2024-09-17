import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-ads-edit-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ads-edit-card.component.html',
  styleUrl: './ads-edit-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsEditCardComponent {
  isEditCard: boolean;

  constructor(private ac: ActivatedRoute) {
    this.ac.paramMap.pipe(map((r: any) => r.params.id)).subscribe((id) => {
      if (id) {
        this.isEditCard = true;
      }
    })
    this.ac.data.subscribe((r: any) => {
      console.log(r.save())
    })
  }
  

  public save() {
    console.log((this.ac.snapshot.data as any).save())
  }

}
