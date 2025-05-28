import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const token = searchParams.get('token');

        if (!token) {
            return NextResponse.json(
                { error: 'Token no proporcionado' },
                { status: 400 }
            );
        }

        const invitation = await prisma.invitado.findUnique({
            where: {
                token: token
            }
        });

        if (!invitation) {
            return NextResponse.json(
                { error: 'Invitación no válida' },
                { status: 404 }
            );
        }

        return NextResponse.json(invitation);
    } catch (error) {
        console.error('Error en la validación:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
} 