import { Response, Request } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentsRepository';

export default class AppointmentClass {
  index(response: Response) {
    console.log(
      'Index -> Checar seu console aqui para ver que a rota tá funcionando',
    );
    console.log('Fazer sua logica');
    // Fazer Logica abaixo

    // try {
    //   const appointments = new AppointmentRepository().all();
    //   console.log(appointments, 'Res');
    //   return response.json({
    //     success: true,
    //     appointments,
    //   });
    // } catch (error) {
    //   return response.send({
    //     error: 'Error',
    //   });
    // }
  }

  create(response: Response, request: Request) {
    console.log(
      'Create- Checar seu console aqui para ver que a rota tá funcionando',
    );
    console.log('Fazer sua logica');
    // Faze r logica abaixo
    // const { provider, date } = request.body;
    // const parsedDate = startOfHour(parseISO(date));
    // const findAppointmentsInSameDate = new AppointmentRepository().findByDate(
    //   parsedDate,
    // );
    // if (findAppointmentsInSameDate) {
    //   return response
    //     .status(400)
    //     .json({ message: 'This appointment is already booked' });
    // }
    // const appointment = new AppointmentRepository().create(
    //   provider,
    //   parsedDate,
    // );
    // return response.json(appointment);
  }
}
