import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { Todo } from '../../app/todo';

@IonicPage()
@Component({
  selector: 'page-all',
  templateUrl: 'all.html',
})
export class AllPage {
  todoList: Todo[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public actionSheet: ActionSheetController,
              private todoProvider: TodoProvider) {
  }

  ionViewWillEnter() {
    this.todoProvider.getTodo()
      .subscribe(todo => this.todoList = todo);
  }


  public addMenu() {
    let alert = this.alertCtrl.create({
      title: 'Add todo',
      message: 'Input what you want to do',
      inputs: [
        {
          name: 'text',
          placeholder: 'Text',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          },
        },
        {
          text: 'Add',
          handler: data => {
            this.todoProvider.addNew(data.text)
              .subscribe(() => this.getTodo());
          },
        },
      ],
    });
    alert.present();
  }

  public getTodo() {
    this.todoProvider.getTodo()
      .subscribe(todo => this.todoList = todo);
  }

  public removeTodo(id) {
    this.todoProvider.removeTodo(id)
      .subscribe(() => this.getTodo());
  }

  public updateTodo(data) {
    this.todoProvider.updateTodo(data)
      .subscribe(() => this.getTodo());
  }

  public chngVal(data) {
    let alert = this.alertCtrl.create({
      title: 'Change todo',
      message: 'Input what you want to do',
      inputs: [
        {
          name: 'text',
          placeholder: 'Text',
          value: data.value,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          },
        },
        {
          text: 'Change',
          handler: item => {
            this.todoProvider.updateTodo({ id: data.id, value: item.text, isActive: data.isActive })
              .subscribe(() => this.getTodo());
          },
        },
      ],
    });
    alert.present();
  }

  sheetAction() {
    const actionSheet = this.actionSheet.create({
      title: 'What you want to do?',
      buttons: [
        {
          text: 'Delete all',
          role: 'destructive',
          handler: () => {
            this.todoProvider.deleteAll(this.todoList)
              .subscribe(() => this.getTodo());
          },
        },

        {
          text: 'Complete all',
          handler: () => {
            this.todoList.forEach(item => item.isActive = false);
            this.todoProvider.completeAll(this.todoList)
              .subscribe(() => this.getTodo());
          },
        },

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          },
        },

      ],
    });
    actionSheet.present();
  }

}
