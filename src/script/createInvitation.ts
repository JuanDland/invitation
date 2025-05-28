import { PrismaClient } from '../../generated/prisma';
import crypto from 'crypto';

interface CreateInvitationProps {
    nombre: string;
    mensaje?: string;
    cantidad?: number;
}

const createInvitation = async (data: CreateInvitationProps) => {

    try {

        const token = crypto.randomBytes(16).toString('hex');

        const prisma = new PrismaClient();

        await prisma.invitado.create({
            data: {
                ...data,
                token,
            }
        });

        console.log(`Invitación creada con éxito`);
        console.log(`https://invitacion.appdland.com/${token}`);
    } catch (error) {
        console.error(error);
    }

}

createInvitation({
    nombre: 'Eduard Osorio & Familia',
    mensaje: 'Me daría gusto que un gran amigo me pueda acompañar en un momento tan importante para mí',
    cantidad: 3,
});