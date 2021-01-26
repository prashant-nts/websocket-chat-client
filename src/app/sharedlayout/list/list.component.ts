import { Component, Input, OnInit } from '@angular/core';
import { IOutputMessage } from 'src/app/interfaces/output-message';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() listElements: IOutputMessage[];

  constructor() { }

  ngOnInit(): void {
  }

}
