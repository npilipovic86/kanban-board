import { Component, OnInit, OnDestroy,  } from "@angular/core";
import { Card } from "src/app/model/kanban-board";
import { KanbanBoardService } from "src/app/service/kanban-board.service";
import { Subscription } from "rxjs";


@Component({
  selector: "app-kanban-board",
  templateUrl: "./kanban-board.component.html",
  styleUrls: ["./kanban-board.component.css"]
})
export class KanbanBoardComponent implements OnInit, OnDestroy {
  private text: string;
  private cardList;
  private card: Card;

  private loader: boolean;
  private board: boolean;
  private interval;

  private todoList = [];
  private doneList = [];
  private doingList = [];
  private subscription = new Subscription();

  constructor(  private _service: KanbanBoardService  ) {}

  ngOnInit() {
    this.loader = true;
    this.board = false;
    this.interval = setTimeout(() => {
      this.toggle();
    }, 2000);

    this.getData();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.subscription.unsubscribe();
  }

  //loader => board transition
  toggle() {
    this.loader = !this.loader;
    this.board = !this.board;
  }

  resetAllList() {
    this.todoList = [];
    this.doneList = [];
    this.doingList = [];
  }
  delete(card:Card) {
    this._service.delete(card).subscribe( response =>{
      const listOfCard = this.findList(card);
      this.removeItem(card, listOfCard);
    })
  }
  isDropAllowed() {
    return this.doingList.length < 3;
  }

  removeItem(item: Card, list: Array<Card>) {
    let index = list.findIndex(x => x.id === item.id);
    list.splice(index, 1);
  }
  //find the list of the card
  findList(card: Card) {
    if (card.done) {
      return this.doneList;
    } else if (card.doing) {
      return this.doingList;
    } else {
      return this.todoList;
    }
  }


  dragEnd(event: any, array: any) {
    //change position of elements
    for (let i = 0; i < array.length; i++) {
      array[i].position = i;
    }
    //save positions
    array.forEach(element => {
      this.update(element);
    });
  }

  onItemDrop(cardDrag: any, listName: string) {
    const card = cardDrag.dragData;

    if (listName === "todo") {
      //remove card from list
      this.removeItem(card, this.findList(card));
      //set new list
      card.doing = false;
      card.done = false;
      card.todo = true;
      card.position = this.todoList.length;
      //add to list
      this.todoList.push(card);
      //save to db
      this.update(card);
    
    } else if (listName === "doing" && this.doingList.length < 3) {
      this.removeItem(card, this.findList(card));
      card.doing = true;
      card.done = false;
      card.todo = false;
      card.position = this.doingList.length;

      this.doingList.push(card);

      this.update(card);

    } else {
      this.removeItem(card, this.findList(card));
      card.doing = false;
      card.done = true;
      card.todo = false;
      card.position = this.doneList.length;

      this.doneList.push(card);

      this.update(card);
    }
  }
  sortInList(cardList) {
    if (cardList) {
      cardList.forEach(element => {
        if (element.done) {
          this.doneList.push(element);
        } else if (element.doing) {
          this.doingList.push(element);
        } else {
          this.todoList.push(element);
        }
      });
      //sort by position
      this.doneList.sort((a, b) => {
        return a.position - b.position;
      });
      this.doingList.sort((a, b) => {
        return a.position - b.position;
      });
      this.todoList.sort((a, b) => {
        return a.position - b.position;
      });
    }
  }
  getData() {
    const sub1 = this._service.getAll().subscribe(response => {
      this.cardList = response;
      this.sortInList(this.cardList);
    });
    this.subscription.add(sub1);
  }

  update(card: Card) {
    this._service.update(card).subscribe(response => {
      this.resetAllList();
      this.sortInList(this.cardList);
    });
  }
  create() {
    this.card = {
      text: this.text,
      done: false,
      doing: false,
      todo: true,
      position: this.todoList.length
    };
    const sub2 = this._service.create(this.card).subscribe(response => {
      //response => card
      //add new card to list
      this.cardList.push(response);
      //update all list
      this.resetAllList();
      this.sortInList(this.cardList);
      //reset text input
      this.text = "";
    });
    this.subscription.add(sub2);
  }
}
