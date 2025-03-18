import { BadRequestException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { BodyDto } from 'src/user/user.dto';

export function Validation(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body as BodyDto;

  if (!name) throw new BadRequestException('incorrect name');
  if (!email) throw new BadRequestException('incorrect email');
  if (!password) throw new BadRequestException('incorrect password');

  next();
}
