import { AsyncPipe, CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamsService } from './service/teams.service';
import { TeamsComponent } from './component/teams/teams.component';
import { Stats, Team } from './model/teams';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsyncPipe,TeamsComponent,CommonModule, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basketball-solution'; 
  
  teamService = inject(TeamsService)

  team$ = this.teamService.getTeams();

  stats!: Stats[];
  selectTeam = -1;
 getTeamDetails(team:Team){

  const id  = team.id;
    this.team$?.subscribe((data)=>{
    data.filter((val)=>{
      if(val.id === id){
        this.teamService.getTeamStats(val).subscribe(stats =>{
          this.stats = stats;
        })
        this.selectTeam = val.id;
      }
      
    })
  
    })

  }
}
