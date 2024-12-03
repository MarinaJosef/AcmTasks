import { Book } from "./Book";
let this_id=1;

export function generateID():number{
    return this_id++;
}
export function validateBook(book:Book):Boolean{
    let isValid:Boolean;

    if (typeof book.id === 'number' &&
    typeof book.title === 'string' &&
    typeof book.author === 'string' &&
    typeof book.isBorrowed === 'boolean' &&
    typeof book.year === 'number' &&
    (typeof book.borrowedBy === 'string' || book.borrowedBy === null) && typeof book.category === 'string')
    return true;
    
    else 
    return false;
}
