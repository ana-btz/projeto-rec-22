import { Prisma } from '@prisma/client';
import prisma from 'config/database';

async function create(data: Prisma.UserUncheckedCreateInput) {
    return prisma.user.create({
        data,
    });
}

async function findUserByEmail(email: string, select?: Prisma.UserSelect) {
    const params: Prisma.UserFindUniqueArgs = {
        where: {
            email,
        },
    };

    if (select) {
        params.select = select;
    }

    return prisma.user.findUnique(params);
}

export const userRepository = {
    findUserByEmail,
    create,
};