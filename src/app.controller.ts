import { Controller, Post, Delete, Put, Get } from "@nestjs/common";
import { BookService } from "./book.servis";

@Controller("book")
export class BookController {

    constructor(private bookService: BookService) {}

    // add book
    @Post('/addBook')
    addBook() : string {
        return this.bookService.addBook();
    }

    // delete book
    @Delete('/deleteBook')
    deleteBook() : string {
        return this.bookService.deleteBook();
    }

    // update book
    @Put('/updateBook')
    updateBook() : string {
        return this.bookService.updateBook();
    }

    // list book
    @Get('/allBook')
    allBook() : string {
        return this.bookService.allBook();
    }
}