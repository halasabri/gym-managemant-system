import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface GymClass {
  id: number;
  title: string;
  trainer: string;
  time: string;
  day: string;
  capacity: number;
  bookedCount: number;
  category: string;
}

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './classes.html',
  styleUrl: './classes.css'
})
export class ClassesComponent {
  showModal = false;

  // نموذج حصة جديدة
  newClassTitle = '';
  newClassTrainer = '';
  newClassDay = 'Monday';
  newClassTime = '10:00 AM - 11:00 AM';
  newClassCapacity: number = 15;
  newClassCategory = 'Cardio & Fitness';

  // قائمة الحصص
  classes: GymClass[] = [
    {
      id: 1,
      title: 'Morning Yoga',
      trainer: 'Rania Mansour',
      time: '08:00 AM - 09:00 AM',
      day: 'Everyday',
      capacity: 15,
      bookedCount: 12,
      category: 'Yoga & Pilates'
    },
    {
      id: 2,
      title: 'CrossFit Challenge',
      trainer: 'Khaled Naser',
      time: '05:00 PM - 06:00 PM',
      day: 'Mon, Wed, Fri',
      capacity: 20,
      bookedCount: 20,
      category: 'CrossFit'
    },
    {
      id: 3,
      title: 'Bodybuilding & Power',
      trainer: 'Samer Ali',
      time: '06:30 PM - 07:30 PM',
      day: 'Tue, Thu, Sat',
      capacity: 12,
      bookedCount: 8,
      category: 'Strength'
    }
  ];

  // فتح وإغلاق الـ Modal
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.newClassTitle = '';
    this.newClassTrainer = '';
  }

  // إضافة حصة جديدة
  addClass() {
    if (this.newClassTitle.trim() && this.newClassTrainer.trim()) {
      this.classes.push({
        id: Date.now(),
        title: this.newClassTitle,
        trainer: this.newClassTrainer,
        time: this.newClassTime,
        day: this.newClassDay,
        capacity: this.newClassCapacity || 10,
        bookedCount: 0,
        category: this.newClassCategory
      });
      this.closeModal();
    }
  }

  // حجز مقعد بالحصة
  bookClass(gymClass: GymClass) {
    if (gymClass.bookedCount < gymClass.capacity) {
      gymClass.bookedCount++;
      alert('Spot successfully booked for ${gymClass.title}'!);
    } else {
      alert('Sorry, this class is fully booked!');
    }
  }

  // إلغاء حجز
  cancelBooking(gymClass: GymClass) {
    if (gymClass.bookedCount > 0) {
      gymClass.bookedCount--;
    }
  }

  // حذف حصة
  deleteClass(id: number) {
    if (confirm('Are you sure you want to cancel and delete this class?')) {
      this.classes = this.classes.filter(c => c.id !== id);
    }
  }
}