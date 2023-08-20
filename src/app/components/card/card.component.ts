import { Component, Input } from '@angular/core';
import { TextAttributes } from 'src/app/model/text-attributes.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: TextAttributes = { text: '', show: true };
  @Input() description: TextAttributes = { text: '', show: true };
  @Input() imageUrl = '';
}
