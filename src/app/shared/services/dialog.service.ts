import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfirmDialogComponent, ConfirmDialogData } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirm(dataOrTitle: ConfirmDialogData | string, message?: string, confirmText?: string, cancelText?: string): Observable<boolean> {
    let data: ConfirmDialogData;
    
    if (typeof dataOrTitle === 'string') {
      // Old signature: confirm(title, message, confirmText, cancelText)
      data = {
        title: dataOrTitle,
        message: message || 'Are you sure?',
        confirmText: confirmText || 'Confirm',
        cancelText: cancelText || 'Cancel',
        type: 'warning'
      };
    } else {
      // New signature: confirm({ title, message, ... })
      data = dataOrTitle;
    }

    const dialogRef: MatDialogRef<ConfirmDialogComponent, boolean> = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: data,
      disableClose: true,
      panelClass: 'app-confirm-dialog-overlay'
    });

    return dialogRef.afterClosed().pipe(
      map(result => result ?? false)
    );
  }

  confirmDelete(itemName: string = 'this item'): Observable<boolean> {
    return this.confirm({
      title: 'Confirm Delete',
      message: `Are you sure you want to delete ${itemName}? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    });
  }
}

