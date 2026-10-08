import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Member {
  id: number;
  name: string;
  plan: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Expired' | 'Frozen';
}

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './members.html',
  styleUrl: './members.css'
})
export class MembersComponent {
  showModal = false;

  // نموذج عضو جديد
  newMemberName = '';
  newMemberPlan = 'Monthly Plan';

  // قائمة المشتركين
  members: Member[] = [
    { id: 1, name: 'Ahmad Mahmoud', plan: 'VIP Gold Plan', startDate: '2026-09-01', endDate: '2026-10-01', status: 'Active' },
    { id: 2, name: 'Sara Khaled', plan: 'Monthly Plan', startDate: '2026-08-15', endDate: '2026-09-15', status: 'Expired' },
    { id: 3, name: 'Omar Khalil', plan: 'Annual Plan', startDate: '2026-01-10', endDate: '2027-01-10', status: 'Active' }
  ];

  // فتح وإغلاق الـ Modal
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.newMemberName = '';
  }

  // إضافة عضو جديد
  addMember() {
    if (this.newMemberName.trim()) {
      const today = new Date().toISOString().split('T')[0];
      const nextMonth = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      
      this.members.push({
        id: Date.now(),
        name: this.newMemberName,
        plan: this.newMemberPlan,
        startDate: today,
        endDate: nextMonth.toISOString().split('T')[0],
        status: 'Active'
      });
      this.closeModal();
    }
  }

  // --- دوال الأزرار (Actions) ---

  // 1. زر التعديل Edit
  editMember(member: Member) {
    const newName = prompt('Edit Member Name:', member.name);
    if (newName && newName.trim()) {
      member.name = newName.trim();
    }
  }

  // 2. زر التجميد Freeze
  freezeMember(member: Member) {
    if (confirm('Are you sure you want to freeze subscription for ${member.name}?')) {
      member.status = 'Frozen';
    }
  }

  // 3. زر التجديد Renew
  renewMember(member: Member) {
    if (confirm('Renew subscription for ${member.name}?')) {
      const today = new Date().toISOString().split('T')[0];
      const nextMonth = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      
      member.startDate = today;
      member.endDate = nextMonth.toISOString().split('T')[0];
      member.status = 'Active';
    }
  }

  // 4. زر الحذف Delete
  deleteMember(id: number) {
    if (confirm('Are you sure you want to delete this member?')) {
      this.members = this.members.filter(m => m.id !== id);
    }
  }
}