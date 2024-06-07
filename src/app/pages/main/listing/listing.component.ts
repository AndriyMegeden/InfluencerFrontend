import { Component } from '@angular/core';
import { ComponentsModule } from "../../../theme/components/components.module";
import { Card } from '@interfaces/listing.interface';

@Component({
    selector: 'app-listing',
    standalone: true,
    templateUrl: './listing.component.html',
    styleUrl: './listing.component.scss',
    imports: [ComponentsModule]
})
export class ListingComponent {

}
