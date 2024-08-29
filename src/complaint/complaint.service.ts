import { Injectable } from '@nestjs/common';
import { Complaint } from './complaint.entity';

@Injectable()
export class ComplaintService {
  private complaints: Complaint[] = [];
  private idCounter = 1;

  addComplaint(description: string): Complaint {
    const newComplaint: Complaint = {
      id: this.idCounter++,
      description,
      status: 'pending',
    };
    this.complaints.push(newComplaint);
    return newComplaint;
  }

  changeStatus(
    id: number,
    status: 'pending' | 'resolved' | 'rejected',
  ): Complaint {
    const complaint = this.complaints.find((c) => c.id === id);
    if (complaint) {
      complaint.status = status;
    }
    return complaint;
  }

  getComplaints(): Complaint[] {
    return this.complaints;
  }
}
