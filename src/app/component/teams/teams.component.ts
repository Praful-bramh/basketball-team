import { Component, input, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TeamsService } from '../../service/teams.service';
import { Stats, Team } from '../../model/teams';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent implements OnChanges {
  @Input() teams!: Team;
  @Input() stats!: Stats;
  imageSource!:string;

  constructor(private teamService: TeamsService){
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.teams= changes['teams']?.currentValue;
    this.stats = changes['stats']?.currentValue;
    this.imageSource =`https://interstate21.com/nba-logos/${this.teams.code}.png`
  }

  getAssociationDescription(teams: Team){
    return `${teams.fullname}[${teams.code}]`
  }
  getNamewithCode(stats:Stats){
    return `${stats.association}ern Association`
  }

}
