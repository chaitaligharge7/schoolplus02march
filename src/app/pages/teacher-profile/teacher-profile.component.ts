import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UserProfileService } from '../../shared/services/user-profile.service';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-teacher-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingComponent],
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {
  profile: any = null;
  teacher: any = null;
  timetable: any[] = [];
  loading = true;
  dayNames: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(
    private authService: AuthService,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit(): void {
    this.userProfileService.getTeacherProfileAndSchedule().subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.profile = res.data.profile || {};
          this.teacher = res.data.teacher || null;
          this.timetable = res.data.timetable || [];
        }
      },
      error: () => { this.loading = false; }
    });
  }

  // getTimetableForDay(dayOfWeek: number): any[] {
  //   return this.timetable.filter((t: any) => parseInt(t.day_of_week, 10) === dayOfWeek);
  // }
  getTimetableForDay(dayOfWeek: number): any[] {
    return this.timetable.filter((t: any) => {
      if (!isNaN(+t.day_of_week)) return +t.day_of_week === dayOfWeek;
      const index = this.dayNames.findIndex(d => d.toLowerCase() === t.day_of_week.toLowerCase());
      return index + 1 === dayOfWeek; 
    });
  }
}
