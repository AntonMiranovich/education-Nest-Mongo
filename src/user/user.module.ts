import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Validation } from 'src/middlewares';
import { UserSchema } from 'src/schemas/user.shema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  configure(objMiddleware: MiddlewareConsumer) {
    objMiddleware
      .apply(Validation)
      .forRoutes({ path: '/users', method: RequestMethod.POST });
  }
}
