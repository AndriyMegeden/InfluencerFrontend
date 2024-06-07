import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Імпортуємо ActivatedRoute
import { Card } from '@interfaces/listing.interface';
import { CardSettings } from '@static/listing.settings';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: ['./card-listing.component.scss'],
})
export class CardListingComponent implements OnInit {
  cards: Card[] = [];

  constructor(private route: ActivatedRoute) {} // Додаємо ActivatedRoute в конструктор

  ngOnInit(): void {
    // Підписуємося на дані, передані через резолвер
    this.route.data.subscribe((data) => {
      // Отримуємо дані з резолвера і присвоюємо їх полю cards
      this.cards = data['cards'];
    });
  }
}
