import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MessageWrapedService {
  private messageService = inject(MatSnackBar);

  showSuccessMessage(message: string): void {
    this.messageService.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'custom-snack-bar',
    });
  }

  handleError(error: any, detail: string): void {
    console.error(error);
    this.messageService.open(detail, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'custom-snack-bar',
    });
  }
}
