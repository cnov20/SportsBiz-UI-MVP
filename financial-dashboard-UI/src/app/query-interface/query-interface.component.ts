import { Component, OnInit } from '@angular/core';
import { Athlete } from '../athlete.model';

@Component({
  selector: 'app-query-interface',
  templateUrl: './query-interface.component.html',
  styleUrls: ['./query-interface.component.css']
})
export class QueryInterfaceComponent implements OnInit {

	athletes: Athlete[]

	constructor() { }

	ngOnInit() {
		
	}	

}
