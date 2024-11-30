import { Booklist } from "./BookList"
import {generateID,validateBook} from "./LibraryUtils"
import { Book } from "./Book";

let  mylibrary:Booklist=new Booklist();
let books:Book[] =mylibrary.getbook();

books=[
    { id: generateID(), title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isBorrowed: false, year: 1925, borrowedBy: null, category: 'Fiction' },
    { id: generateID(), title: 'A Brief History of Time', author: 'Stephen Hawking', isBorrowed: false, year: 1988, borrowedBy: null, category: 'Science' },
    { id: generateID(), title: 'The Pilgrim’s Progress ', author: 'John Bunyan' , isBorrowed: false, year: 1678, borrowedBy: null, category: 'Fiction' },
    { id: generateID(), title: 'To Kill a Mockingbird', author: 'Harper Lee', isBorrowed: false, year: 1960, borrowedBy: null, category: 'Fiction' },
    { id: generateID(), title: 'Emma ', author: 'Jane Austen', isBorrowed: false, year: 1816, borrowedBy: null, category: 'Fiction' },
  ];

  for(let i=0;i<5;i++){
    if(validateBook(books[i]))
        mylibrary.addBook(books[i]);
  }
  console.log("your search result is :") ;
  console.log(mylibrary.searchBooks("Time"));

  mylibrary.markAsBorrowed(3,"Marina");
  mylibrary.markAsBorrowed(5,"Sarah");

  mylibrary.markAsReturned(3);

  mylibrary.removeBook(4);

  console.log("The books in this library are: \n")
  mylibrary.printBooks();

  console.log(mylibrary.getBorrowedBooks());


