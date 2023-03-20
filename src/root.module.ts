import { Module } from '@nestjs/common';
import { MainModule } from './main/main.module';

import { UsersModule } from './users.module';
import { OrdersModule } from './orders.module';
import { ChatModule } from './chat.module';
import { BookController } from './app.controller';
import { BookService } from './book.servis';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class RootModule {
  constructor() {
    console.log('AppModule ');
  }
}
