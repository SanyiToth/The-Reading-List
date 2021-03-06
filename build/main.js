import { BookList } from "./booklist";
import { Book } from "./book";
let book1 = new Book("Az öreg halász", "dráma", "Ernest Hemingway");
let book2 = new Book("A boldog hülye és az okos depressziós", "dráma", "Kepes András");
let book3 = new Book("Zöldlámpa", "életrajz", "Matthew McConaughey");
let book4 = new Book("Örökült sors", "pszichológia", "Orvos-Tóth Noémi");
let book5 = new Book("Élet a bolygónkon", "tudomány", "David Attenborough");
let bookList = new BookList(book1, book2, book3);
bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.add(book4);
bookList.add(book5);
// console.log(bookList.allTheBooks);
// console.log(bookList.nextBook);
bookList.finishCurrentBook();
// console.log(bookList.currentBook);
// bookList.finishCurrentBook();
// console.log(bookList.countRead());
// console.log(bookList.countNotReadYet());
// console.log(bookList.lastBook);
// console.log(bookList.allTheBooks);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyIsInNvdXJjZXMiOlsibWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFHNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDcEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsdUNBQXVDLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZGLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUNyRSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDekUsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFFNUUsSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUdqRCxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BCLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQixRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BCLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFcEIscUNBQXFDO0FBR3JDLGtDQUFrQztBQUNsQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUM3QixxQ0FBcUM7QUFDckMsZ0NBQWdDO0FBQ2hDLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFFM0Msa0NBQWtDO0FBQ2xDLHFDQUFxQyJ9