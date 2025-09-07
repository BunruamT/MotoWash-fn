export type User = {
  id: string;
  role: 'customer' | 'admin';
  email?: string;
  name: string;
  picture?: string;
};

export type BookingStatus =
  | 'pending'
  | 'approved'
  | 'assigned'
  | 'in-progress'
  | 'completed'
  | 'cancelled';

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
};

export type PickupPoint = {
  id: string;
  name: string;
  address: string;
  isActive: boolean;
};

export type TimeSlot = {
  id: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
};

export type Booking = {
  id: string;
  customerId: string;
  customerName: string;
  serviceId: string;
  serviceName: string;
  pickupPointId: string;
  pickupPointName: string;
  date: string;
  slotId: string;
  startTime: string;
  endTime: string;
  status: BookingStatus;
  vehicle: {
    type: string;
    brand: string;
    model: string;
    color: string;
    plateNumber: string;
  };
  notes?: string;
  photoUrl?: string;
  assignedStaffId?: string;
  assignedStaffName?: string;
  receiptUrl?: string;
  rating?: number;
  review?: string;
  createdAt: string;
  updatedAt: string;
};

export type BusinessHours = {
  dayOfWeek: number;
  isOpen: boolean;
  openTime?: string;
  closeTime?: string;
};

export type ClosureDate = {
  id: string;
  date: string;
  reason: string;
};

export type AdminStats = {
  totalBookings: number;
  pendingBookings: number;
  completedBookings: number;
  totalRevenue: number;
  averageRating: number;
};
