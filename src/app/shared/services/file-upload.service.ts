import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private readonly MAX_SIZE_MB = 10;
  private readonly ALLOWED_TYPES = ['pdf', 'doc', 'docx'];

  validateFile(file: File): { isValid: boolean; error?: string } {
    // Validar tamaño
    if (file.size > this.MAX_SIZE_MB * 1024 * 1024) {
      return {
        isValid: false,
        error: `El archivo debe ser menor a ${this.MAX_SIZE_MB}MB`
      };
    }

    // Validar extensión
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    if (!this.ALLOWED_TYPES.includes(extension)) {
      return {
        isValid: false,
        error: `Tipo de archivo no permitido. Use: ${this.ALLOWED_TYPES.join(', ')}`
      };
    }

    return { isValid: true };
  }

  getAllowedTypes(): string[] {
    return this.ALLOWED_TYPES;
  }

  getMaxSize(): number {
    return this.MAX_SIZE_MB;
  }
}