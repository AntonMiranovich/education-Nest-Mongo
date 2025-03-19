import { BadRequestException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function ValidationUser(req: Request, res: Response, next: NextFunction) {
  const { name, email, age, password } = req.body;

  if (!name) throw new BadRequestException('incorrect name');
  if (!email) throw new BadRequestException('incorrect email');
  if (!age) throw new BadRequestException('incorrect age');
  if (!password) throw new BadRequestException('incorrect password');

  next();
}


export function ValidationLesson(req: Request, res: Response, next: NextFunction) {
  const { title, description, level } = req.body;

  if (!title) throw new BadRequestException('incorrect title');
  if (!description) throw new BadRequestException('incorrect description');
  if (!level) throw new BadRequestException('incorrect level');

  next();
}

export function ValidationCourse(req: Request, res: Response, next: NextFunction) {
  const { title, description, level } = req.body;

  if (!title) throw new BadRequestException('incorrect title');
  if (!description) throw new BadRequestException('incorrect description');
  if (!level) throw new BadRequestException('incorrect level');

  next();
}
