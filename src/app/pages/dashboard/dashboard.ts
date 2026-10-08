import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
  type: 'member' | 'payment' | 'class';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  // إحصائيات سريعة
  totalMembers = 248;
  activeMembers = 215;
  monthlyRevenue = 4250;
  todaysClasses = 6;

  // قائمة الأنشطة الأخيرة
  activities: Activity[] = [
    { id: 1, user: 'Ahmad Mahmoud', action: 'Renewed VIP Gold Plan', time: '10 mins ago', type: 'payment' },
    { id: 2, user: 'Sara Khaled', action: 'Joined CrossFit Class', time: '30 mins ago', type: 'class' },
    { id: 3, user: 'Omar Khalil', action: 'Registered as New Member', time: '2 hours ago', type: 'member' },
    { id: 4, user: 'Lina Hassan', action: 'Booked Pilates Session', time: '4 hours ago', type: 'class' }
  ];

  // أفعال الكبسات السريعة
  quickCheckIn() {
    const memberName = prompt('Enter member name or ID for quick Check-In:');
    if (memberName) {
      alert('Check-in successful for ${memberName}!');
    }
  }

  generateReport() {
    alert('Generating monthly financial & attendance report... Download starting.');
  }
}