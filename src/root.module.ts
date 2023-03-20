import { Module } from '@nestjs/common';
import { MainModule } from './main/main.module';

import { UsersModule } from './users.module';
import { OrdersModule } from './orders.module';
import { ChatModule } from './chat.module';
import { BookController } from './app.controller';

@Module({
  imports: [MainModule , UsersModule , OrdersModule, ChatModule],
  controllers: [BookController],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('AppModule ');
  }
}
