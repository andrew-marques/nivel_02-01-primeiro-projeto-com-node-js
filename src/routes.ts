import { Router } from 'express';
import AppointmentClass from './controllers/AppointmentRepository';

const ClassAppointment = new AppointmentClass();

const appointmentsRouter = Router();

appointmentsRouter.get('/', ClassAppointment.index);
appointmentsRouter.post('/appointments', ClassAppointment.create);

export default appointmentsRouter;
