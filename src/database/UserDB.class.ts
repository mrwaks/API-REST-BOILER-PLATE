'use strict';

import { User } from '@prisma/client';
import { prisma } from '../setup';

class UserDB {
  static find = async (props: Partial<User>) => {
    const user = await prisma.user.findFirst({
      where: props,
    });
    return user;
  };
}

export default UserDB;