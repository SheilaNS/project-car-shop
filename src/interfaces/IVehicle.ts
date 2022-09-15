import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string({
    required_error: 'model is required',
    invalid_type_error: 'model must be string',
  }).min(3, { message: 'model must have at least 3 characters' }),
  year: z.number({
    required_error: 'year is required',
    invalid_type_error: 'year must be an int number',
  }).int().gte(1900).lte(2022),
  color: z.string({
    required_error: 'color is required',
    invalid_type_error: 'color must be string',
  }).min(3, { message: 'color must have at least 3 characters' }),
  status: z.boolean().optional(),
  buyValue: z.number({
    required_error: 'buyValue is required',
    invalid_type_error: 'buyValue must be an int number',
  }).int(),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { VehicleZodSchema, IVehicle };