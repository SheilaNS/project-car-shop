import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorcycleZodSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().positive().lte(2500),
});

const Motorcycle = MotorcycleZodSchema.merge(VehicleZodSchema);
type IMotorcycle = z.infer<typeof Motorcycle>;

export { Motorcycle, IMotorcycle };