import { Controller, Post, Delete, Put, Get, Param } from "@nestjs/common";

@Controller("book")
export class BookController {

    // add book
    @Post('/add')
    addBook() : string {
        return "To Add Books";
    }

    // delete book
    @Delete('/deleteBook')
    deleteBook() : string {
        return "To Delete Books";
    }

    // update book
    @Put('/updateBook')
    updateBook() : string {
        return "To Update Books";
    }

    // list book
    @Get('/allBook')
    allBook() : string {
        return "List All Books";
    }

    // find book by ID
    @Get('/findBookByID/:bookid')
    findBookByID(@Param() params): string {
      console.log(params.bookid);
      return `Book ID : # ${params.bookid} `;
    }
}