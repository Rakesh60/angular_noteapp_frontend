import { Component, OnInit, OnChanges } from '@angular/core';
import { Item } from './items'; // Assuming Item interface is defined in items.ts
import { DataService } from '../data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  newItem: Item = { // Initialize with initial values
    // Add '_id' property if your items require it
    _id: '',
    name: '',
    description: ''
  };

  // Define 'person' property here
  person: { firstName: string } = {
    firstName: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.dataService.getItems()
      .subscribe(items => {
        // Check if each item has an _id property before using it
        this.items = items.filter(item => !!item._id);
      });
  }

  createItem(): void {
    // If newItem doesn't have an _id, add it before sending to API (if needed)
    if (!this.newItem._id) {
      // Implement your ID generation logic (e.g., UUID library)
      this.newItem._id = this.generateRandomId();
    }

    this.dataService.createItem(this.newItem)
      .subscribe(item => {
        this.items.push(item);
        this.newItem = { _id: '', name: '', description: '' }; // Reset form
      });
  }

  updateItem(item: Item): void {
    // Check if item has an _id before using it
    if (!item._id) {
      console.error('Item does not have an _id property');
      return; // Handle error gracefully
    }
  
    this.dataService.updateItem(item._id, item)
      .subscribe(updatedItem => {
        const index = this.items.findIndex(i => i._id === updatedItem._id);
        if (index !== -1) {
          this.items[index] = updatedItem;
        } else {
          console.error('Item not found in items array');
        }
      }, error => {
        console.error('Error updating item:', error);
        // Handle error gracefully, e.g., display error message to user
      });
  }

  deleteItem(id: string): void {
    this.dataService.deleteItem(id)
      .subscribe(() => {
        const index = this.items.findIndex(i => i._id === id);
        this.items.splice(index, 1);
      });
  }

  // Add a method to generate a random ID if needed
  private generateRandomId(): string {
    // Implement your ID generation logic here (e.g., using a UUID library)
    return 'your-random-id-format';
  }
}
