import { Book } from "./Book";

export class Booklist{
   private books :Book[]=[];
   getbook():Book[]{
    return this.books;
   }
    addBook(book:Book):void {
     this.books.push(book);
   }
    removeBook(id:number):void{
        for(let index in this.books){
            let index:number=0;
            if(this.books[index].id===id)
            {
                this.books.splice(index, 1);
            }
        }

    }
    searchBooks(query:string):Book[]{
       let  book:Book[]=[];
       for(let index in this.books){
        if(query===this.books[index].author || query===this.books[index].title){
          book[index]=this.books[index];
        }
    }
        return book;
    }
    markAsBorrowed(id:number,borrower:string):void{
        for(let index in this.books){
            if(id===this.books[index].id){
            this.books[index].isBorrowed=true;
            this.books[index].borrowedBy=borrower;
        }
   
    }
}
    markAsReturned(id:number):void{
        for(let index in this.books){
            if(id===this.books[index].id)
            {
        this.books[index].isBorrowed=false;
        this.books[index].borrowedBy=null;
            }
        }
    }
    getBorrowedBooks():Book[]{
       let borrowedbooks:Book[]=[];
        for(let index in this.books)
         {
            if(this.books[index].isBorrowed)
                borrowedbooks[index]=this.books[index];
         }
    return borrowedbooks;
        }
        printBooks():void{
                    
            for(let index in this.books){
                console.log(this.books[index].title ,"\n")
            }
    }

}