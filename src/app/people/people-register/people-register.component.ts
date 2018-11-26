import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import { Person } from './../../core/model/person.model';
import { PeopleService } from './../people.service';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-people-register',
  templateUrl: './people-register.component.html',
  styleUrls: ['./people-register.component.css']
})
export class PeopleRegisterComponent implements OnInit {

  personId: number;
  person = new Person();

  constructor(
    private peopleService: PeopleService,
    private messageService: MessageService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }
  ngOnInit(): void {

    this.title.setTitle('New Person');

    this.personId = this.route.snapshot.params['id'];
    console.log(this.personId);

    if (this.personId) {
      this.loadPerson(this.personId);
    }
  }

  new(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.person = new Person();
    }.bind(this), 1);

    this.router.navigate(['/people/new']);
  }

  save(form: FormControl) {
    if (this.editing) {
      this.update(form);

    } else {
      this.addPerson(form);
    }
  }

  get editing() {
    return Boolean(this.person.id);
  }

  private update(form: FormControl) {
    this.peopleService.update(this.person)
      .then(person => {
        this.person = person;

        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Person edited successful!'});
        this.setTitleUpdate();
      })
      .catch(error => this.errorHandlerService.handle(error));
  }
  private loadPerson(personId: number) {
    this.peopleService.findById(personId)
      .then(person => {
        this.person = person;
        console.log(person);
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  private setTitleUpdate() {
    this.title.setTitle(`Updating person: ${this.person.name}`);
  }

  private addPerson(form: FormControl) {
    this.peopleService.save(this.person)
    .then(person => {
      this.person = person;


      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Person created successful!'});
      this.router.navigate(['/people', person.id]);
    })
    .catch(error => this.errorHandlerService.handle(error));
  }
}
