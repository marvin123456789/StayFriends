import { Component, OnInit } from '@angular/core';
import * as data from '../../../data/bundesland.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public stateList = data.stateList;
  public personIndexCounts = data.personIndexCounts;

  constructor() { }

  ngOnInit(): void {
  }

}
