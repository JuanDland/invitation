import { PrismaClient } from '../../generated/prisma';
import crypto from 'crypto';

interface CreateInvitationProps {
    nombre: string;
    mensaje?: string;
}

const createInvitation = async (data: CreateInvitationProps) => {

    const token = crypto.randomBytes(16).toString('hex');


    const prisma = new PrismaClient();

    const invitation = await prisma.invitado.create({
        data: {
            ...data,
            token,
        }
    });

    console.log(`Invitación creada con éxito: ${invitation.id}`);
}

createInvitation({
    nombre: 'Juan',
    mensaje: 'Hola, como estas?',
});