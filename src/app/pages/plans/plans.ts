import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MembershipPlan {
  id: number;
  name: string;
  price: number;
  durationMonths: number;
  features: string[];
  isPopular?: boolean;
}

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './plans.html',
  styleUrl: './plans.css'
})
export class PlansComponent {
  showModal = false;

  // نموذج خطة جديدة
  newPlanName = '';
  newPlanPrice: number | null = null;
  newPlanDuration: number = 1;

  // قائمة الخطط
  plans: MembershipPlan[] = [
    {
      id: 1,
      name: 'Monthly Basic',
      price: 30,
      durationMonths: 1,
      features: ['Full Gym Access', 'Locker Room Access', 'Free WiFi'],
      isPopular: false
    },
    {
      id: 2,
      name: 'Quarterly Standard',
      price: 75,
      durationMonths: 3,
      features: ['Full Gym Access', 'Locker Room Access', '1 Free Trainer Session', 'Sauna Access'],
      isPopular: true
    },
    {
      id: 3,
      name: 'VIP Annual',
      price: 250,
      durationMonths: 12,
      features: ['24/7 VIP Access', 'Personal Trainer (4x/mo)', 'Free Nutrition Plan', 'Sauna & Pool Access'],
      isPopular: false
    }
  ];

  // فتح وإغلاق الـ Modal
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.newPlanName = '';
    this.newPlanPrice = null;
    this.newPlanDuration = 1;
  }

  // إضافة خطة جديدة
  addPlan() {
    if (this.newPlanName.trim() && this.newPlanPrice !== null) {
      this.plans.push({
        id: Date.now(),
        name: this.newPlanName,
        price: this.newPlanPrice,
        durationMonths: this.newPlanDuration,
        features: ['Full Gym Access', 'Locker Room Access'],
        isPopular: false
      });
      this.closeModal();
    }
  }

  // تعديل خطة
  editPlan(plan: MembershipPlan) {
    const newPrice = prompt('Enter new price for ${plan.name} ($):', plan.price.toString());
    if (newPrice && !isNaN(Number(newPrice))) {
      plan.price = Number(newPrice);
    }
  }

  // حذف خطة
  deletePlan(id: number) {
    if (confirm('Are you sure you want to delete this subscription plan?')) {
      this.plans = this.plans.filter(p => p.id !== id);
    }
  }
}