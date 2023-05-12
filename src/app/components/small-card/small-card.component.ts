import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{
  ngOnInit(): void {
  }
  @Input()
  cardPhoto:string = ""
  @Input()
  cardTitle:string = ""

}