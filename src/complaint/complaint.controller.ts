import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { Complaint } from './complaint.entity';

@Controller('complaints')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {}

  @Post()
  addComplaint(@Body('description') description: string): Complaint {
    return this.complaintService.addComplaint(description);
  }

  @Patch(':id/status')
  changeStatus(
    @Param('id') id: number,
    @Body('status') status: 'pending' | 'resolved' | 'rejected',
  ): Complaint {
    return this.complaintService.changeStatus(id, status);
  }

  @Get()
  getComplaints(): Complaint[] {
    return this.complaintService.getComplaints();
  }
}
