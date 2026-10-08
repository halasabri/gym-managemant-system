import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  phone: string;
  status: 'Active' | 'On Leave';
  clientsCount: number;
}

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trainers.html',
  styleUrl: './trainers.css'
})
export class TrainersComponent {
  showModal = false;

  // نموذج مدرب جديد
  newTrainerName = '';
  newTrainerSpecialty = 'Fitness & Bodybuilding';
  newTrainerPhone = '';

  // قائمة المدربين
  trainers: Trainer[] = [
    { id: 1, name: 'Samer Ali', specialty: 'Fitness & Bodybuilding', phone: '+962 79 123 4567', status: 'Active', clientsCount: 25 },
    { id: 2, name: 'Rania Mansour', specialty: 'Yoga & Pilates', phone: '+962 78 987 6543', status: 'Active', clientsCount: 18 },
    { id: 3, name: 'Khaled Naser', specialty: 'CrossFit & Cardio', phone: '+962 77 555 4433', status: 'On Leave', clientsCount: 12 }
  ];

  // دالة حساب المدربين النشطين
  getActiveTrainersCount(): number {
    return this.trainers.filter(t => t.status === 'Active').length;
  }

  // فتح وإغلاق الـ Modal
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.newTrainerName = '';
    this.newTrainerPhone = '';
  }

  // إضافة مدرب جديد
  addTrainer() {
    if (this.newTrainerName.trim()) {
      this.trainers.push({
        id: Date.now(),
        name: this.newTrainerName,
        specialty: this.newTrainerSpecialty,
        phone: this.newTrainerPhone || 'N/A',
        status: 'Active',
        clientsCount: 0
      });
      this.closeModal();
    }
  }

  // تعديل اسم المدرب
  editTrainer(trainer: Trainer) {
    const newName = prompt('Edit Trainer Name:', trainer.name);
    if (newName && newName.trim()) {
      trainer.name = newName.trim();
    }
  }

  // تغيير الحالة (Active / On Leave)
  toggleStatus(trainer: Trainer) {
    trainer.status = trainer.status === 'Active' ? 'On Leave' : 'Active';
  }

  // حذف مدرب
  deleteTrainer(id: number) {
    if (confirm('Are you sure you want to delete this trainer?')) {
      this.trainers = this.trainers.filter(t => t.id !== id);
    }
  }
}