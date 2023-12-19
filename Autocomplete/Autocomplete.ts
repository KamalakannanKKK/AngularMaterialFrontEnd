import { Component, OnInit } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent implements OnInit {
  colorarray = ['red', 'yellow', 'blue']
  filteroptions!: Observable<string[]>
  formcontrol = new FormControl('');
  ngOnInit(): void {
    this.filteroptions = this.formcontrol.valueChanges.pipe(
      startWith(''), map(value => this._FILTER(value || ''))
    )
  }
  private _FILTER(value: string): string[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarray.filter(option => option.toLocaleLowerCase().includes(searchvalue))
  }
}
