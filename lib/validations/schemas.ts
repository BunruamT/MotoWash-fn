import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const vehicleSchema = z.object({
  type: z.string().min(1, 'Vehicle type is required'),
  brand: z.string().min(1, 'Brand is required'),
  model: z.string().min(1, 'Model is required'),
  color: z.string().min(1, 'Color is required'),
  plateNumber: z.string().min(1, 'Plate number is required'),
});

export const bookingSchema = z.object({
  serviceId: z.string().min(1, 'Service is required'),
  pickupPointId: z.string().min(1, 'Pickup point is required'),
  date: z.string().min(1, 'Date is required'),
  slotId: z.string().min(1, 'Time slot is required'),
  vehicle: vehicleSchema,
  notes: z.string().optional(),
  photo: z.instanceof(File).optional(),
});

export const ratingSchema = z.object({
  rating: z.number().min(1).max(5),
  review: z.string().optional(),
});

export const businessHoursSchema = z.array(
  z.object({
    dayOfWeek: z.number().min(0).max(6),
    isOpen: z.boolean(),
    openTime: z.string().optional(),
    closeTime: z.string().optional(),
  })
);

export const closureDateSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  reason: z.string().min(1, 'Reason is required'),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type RatingInput = z.infer<typeof ratingSchema>;
export type BusinessHoursInput = z.infer<typeof businessHoursSchema>;
export type ClosureDateInput = z.infer<typeof closureDateSchema>;
