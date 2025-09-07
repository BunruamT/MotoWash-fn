import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api, { endpoints } from '@/lib/api/client';
import type { Booking, Service, PickupPoint, TimeSlot, AdminStats } from '@/types';
import type { BookingInput } from '@/lib/validations/schemas';

// Bookings
export const useBooking = (id: string) => {
  return useQuery({
    queryKey: ['booking', id],
    queryFn: async () => {
      const { data } = await api.get<Booking>(endpoints.booking(id));
      return data;
    },
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: BookingInput) => {
      const formData = new FormData();
      Object.entries(input).forEach(([key, value]) => {
        if (key === 'vehicle') {
          formData.append(key, JSON.stringify(value));
        } else if (key === 'photo' && value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      });
      const { data } = await api.post<Booking>(endpoints.bookings, formData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
};

// Services
export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const { data } = await api.get<Service[]>(endpoints.services);
      return data;
    },
  });
};

// Pickup Points
export const usePickupPoints = () => {
  return useQuery({
    queryKey: ['pickupPoints'],
    queryFn: async () => {
      const { data } = await api.get<PickupPoint[]>(endpoints.pickupPoints);
      return data;
    },
  });
};

// Time Slots
export const useAvailableTimeSlots = (date: string) => {
  return useQuery({
    queryKey: ['timeSlots', date],
    queryFn: async () => {
      const { data } = await api.get<TimeSlot[]>(`${endpoints.bookings}/time-slots`, {
        params: { date },
      });
      return data;
    },
    enabled: !!date,
  });
};

// Admin Stats
export const useAdminStats = () => {
  return useQuery({
    queryKey: ['adminStats'],
    queryFn: async () => {
      const { data } = await api.get<AdminStats>(endpoints.adminStats);
      return data;
    },
  });
};
