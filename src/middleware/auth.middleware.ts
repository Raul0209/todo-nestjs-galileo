import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['authorization'];
    if (apiKey !== 'laClaveMasSeguraDelMundoMundial') {
      throw new UnauthorizedException('No autorizado');
    }
    next();
  }
}
