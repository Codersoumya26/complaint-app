export class Complaint {
  id: number;
  description: string;
  status: 'pending' | 'resolved' | 'rejected';
}
