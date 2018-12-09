import {BookService} from "./book.service";
import {DVDService} from "./dvd.service";
import {ReaderService} from "./reader.service";

export interface LibraryManager {

    addBook(type, name, isbn, publicationDate, author, publisher, pages);
    addDVD(type, name, isbn, publicationDate, languages, subtitles, actors, producers);
    deleteItem(isbn)


}
