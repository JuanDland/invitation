import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { token, name, guests } = body;

        if (!token || !name || !guests) {
            return NextResponse.json(
                { error: 'Faltan datos requeridos' },
                { status: 400 }
            );
        }

        // Verificar si la invitación existe y está activa
        const invitation = await prisma.invitado.findUnique({
            where: {
                token: token,
                nombre: name
            }
        });

        if (!invitation) {
            return NextResponse.json(
                { error: 'Invitación no válida' },
                { status: 404 }
            );
        }

        // Actualizar la invitación con la confirmación
        await prisma.invitado.update({
            where: {
                id: invitation.id
            },
            data: {
                confirmado: true,
                cantidad: guests,
            }
        });

        return NextResponse.json({
            success: true,
        });

    } catch (error) {
        console.error('Error al confirmar invitación:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
} 