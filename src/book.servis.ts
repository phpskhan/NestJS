import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    addBook() : string {
        return "To Add Books";
    }

    deleteBook() : string {
        return "To Delete Books";
    }

    updateBook() : string {
        return "To Update Books";
    }

    allBook() : string {
        return "List All Books";
    }
}